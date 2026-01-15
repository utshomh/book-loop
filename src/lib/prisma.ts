import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });

const globalsForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
  globalsForPrisma.prisma ||
  new PrismaClient({
    adapter,
    log: [
      { level: "query", emit: "stdout" },
      { level: "error", emit: "stdout" },
      { level: "info", emit: "stdout" },
      { level: "warn", emit: "stdout" },
    ],
  });

if (process.env.NODE_ENV !== "production") globalsForPrisma.prisma = prisma;

export { prisma };
