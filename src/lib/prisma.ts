import { PrismaClient } from "@prisma/client";

const globalsForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
  globalsForPrisma.prisma ||
  new PrismaClient({
    log: [
      { level: "query", emit: "stdout" },
      { level: "error", emit: "stdout" },
      { level: "info", emit: "stdout" },
      { level: "warn", emit: "stdout" },
    ],
  });

if (process.env.NODE_ENV !== "production") globalsForPrisma.prisma = prisma;

export default prisma;
