import { PrismaClient } from "@prisma/client/extension";

const prismaClientST = () => {
    return new PrismaClient();
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientST>;
} & typeof global;

export const prisma = globalThis.prismaGlobal ?? prismaClientST();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
