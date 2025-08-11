import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const isDev = process.env.NODE_ENV !== "production";

interface Prisma {
  prisma: PrismaClient;
}

const globalForPrisma = global as unknown as Prisma;

const newInstance = new PrismaClient().$extends(withAccelerate());

const prisma = globalForPrisma.prisma || newInstance;

if (isDev) globalForPrisma.prisma = prisma;

export { prisma };
