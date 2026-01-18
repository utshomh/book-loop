import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SECRET_KEY;
if (!secretKey) {
  throw new Error(
    "SECRET_KEY is missing from production environment variables"
  );
}
const key = new TextEncoder().encode(secretKey);

export interface SessionPayload extends JWTPayload {
  user: {
    id: number;
    email: string;
    name: string;
    image: string;
  };
}

export async function encrypt(payload: JWTPayload): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1 hour")
    .sign(key);
}

export async function decrypt(input: string): Promise<JWTPayload> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });

  return payload;
}

export async function getSession(): Promise<SessionPayload | null> {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;

  try {
    const payload = (await decrypt(session)) as SessionPayload;
    return payload;
  } catch (err) {
    console.error(err);
    return null;
  }
}
