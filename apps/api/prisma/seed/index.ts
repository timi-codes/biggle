
import { PrismaClient, SocialPlatform } from '@prisma/client';
import celebrities from './celebrities.json'


const main = async() => {
    const prisma = new PrismaClient()
    await prisma.$connect()

    await Promise.all(celebrities.map(async (celebrity) => {
        const existingCelebrity = await prisma.celebrity.findUnique({
            where: { username: celebrity.username },
        });

        if (!existingCelebrity) {
            const existingCategories = await prisma.category.findMany({
                where: {
                    name: {
                        in: celebrity.categories,
                    },
                },
            });

            const existingCategoryNames = existingCategories.map(cat => cat.name);
            const newCategoryNames = celebrity.categories.filter(cat => !existingCategoryNames.includes(cat));

            await prisma.celebrity.create({
                data: {
                    username: celebrity.username,
                    name: celebrity.name,
                    discipline: celebrity.discipline,
                    photo: celebrity.photo,
                    platform: celebrity.platform as SocialPlatform,
                    numOfFollowers: celebrity.numOfFollowers,
                    hasBeneficiary: celebrity.hasBeneficiary,
                    price: celebrity.price,
                    repliesIn: celebrity.repliesIn,
                    categories: {
                        connect: existingCategories.map(cat => ({ id: cat.id })),
                        create: newCategoryNames.map(cat => ({ name: cat })),
                    },
                },
            });
        }
    }));

    await prisma.$disconnect()
}

main()