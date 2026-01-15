import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SECRET_KEY;
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

export async function getUser(): Promise<SessionPayload["user"] | null> {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;

  try {
    const decoded = (await decrypt(session)) as SessionPayload;
    return decoded.user;
  } catch (err) {
    console.error(err);
    return null;
  }
}
