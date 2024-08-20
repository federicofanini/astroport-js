import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

// const { PrismaClient } = require('@prisma/client')

// export const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB