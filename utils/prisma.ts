import { PrismaClient } from '@prisma/client'


// can only be used on the server

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.APP_DATABASE_URL
    }
  }
})

export default prisma;