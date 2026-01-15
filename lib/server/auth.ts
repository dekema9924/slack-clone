import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from '@/generated/prisma/client'
import { PrismaNeon } from "@prisma/adapter-neon";
import { nextCookies } from "better-auth/next-js";


const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL
})
const prisma = new PrismaClient({ adapter })


export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql'
    }),
    emailAndPassword: {
        enabled: true,
        // requireEmailVerification: true
    },
    trustedOrigins: ['http://localhost:3000'],
    plugins: [nextCookies()]

})