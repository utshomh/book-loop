"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

import { prisma } from "@/lib/prisma";
import { encrypt } from "@/lib/session";
import { RegisterSchema, LoginSchema } from "@/schemas/auth";

export async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) return { error: "Email already in use!" };

  const hashedPassword = await bcrypt.hash(password, 10);
  const defaultImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name,
  )}&background=random`;

  await prisma.user.create({
    data: { name, email, password: hashedPassword, image: defaultImage },
  });
}

export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return { error: "Invalid credentials!" };
  }

  const expires = new Date(Date.now() + 60 * 60 * 1000);
  const session = await encrypt({
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      image: user.image,
    },
    expires,
  });

  const isProduction = process.env.NODE_ENV === "production";

  (await cookies()).set("session", session, {
    expires,
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax",
    path: "/",
  });
}

export async function logout() {
  (await cookies()).set("session", "", { expires: new Date(0) });
}
