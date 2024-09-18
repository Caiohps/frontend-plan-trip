import { PrismaClient } from "@prisma/client";
import { PrismaClientInitializationError, PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

let prismaClient: PrismaClient | null = null;

async function createPrismaClientWithRetry() {
    prismaClient = new PrismaClient();
    //first connection with database
    const whileStatus = true;

    while(whileStatus){
        try {
            await prismaClient.$connect();
            console.info({ DatabaseConn: "connection was successful" });
            break;
        } catch (err) {
            if (err instanceof PrismaClientInitializationError) {
                console.error({ DBConn: "Error connecting to the database" });
                console.error(err.message)
            } else if( err instanceof PrismaClientKnownRequestError) {
                console.error({ DBConn: "error executing database query" });
                console.error(err.message)
            } else {
                console.error({ DBConn: "unknown error" });
                console.error(err);
            }
            console.info({ DBConn: "Retrying in 5 seconds" });
            await new Promise((resolve) => setTimeout(resolve, 5000));
        }
    }
}

async function main() {
    await createPrismaClientWithRetry();
}

main().catch((error) => {
    console.error(error);
    process.exit(1)
})

export { prismaClient };