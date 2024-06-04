import { PrismaClient } from '@prisma/client'
// import Prisma from '@prisma/client';

// const { PrismaClient } = Prisma;
// export const prisma = new PrismaClient();

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma