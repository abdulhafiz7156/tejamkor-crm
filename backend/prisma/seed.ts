import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // create two dummy recipes
    const recipe1 = await prisma.user.upsert({
        where: { username: 'Spaghetti Bolognese' },
        update: {},
        create: {
            username: 'Spaghetti Bolognese',
            password: 'classic',
            role_id: 1
        }
    });

    const recipe2 = await prisma.user.upsert({
        where: { username: 'Chicken Curry' },
        update: {},
        create: {
            username: 'Chicken Curry',
            password: 'Indian',
            role_id: 1
        }
    });

    console.log({ recipe1, recipe2 });
}

// execute the main function
main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });