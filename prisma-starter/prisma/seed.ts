import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async () => {
  await prisma.user.createMany({
    data: [
      {
        name: "Alice",
        email: "alice@mail.com",
        age: 25,
        isMarried: false,
        nationality: "Bangladeshi",
      },
      {
        name: "Nancy",
        email: "nancy@mail.com",
        age: 22,
        isMarried: true,
        nationality: "Bangladeshi",
      },
      {
        name: "Rakib",
        email: "rakib@mail.com",
        age: 20,
        isMarried: false,
        nationality: "Brazilian",
      },
      {
        name: "Akib",
        email: "akib@mail.com",
        age: 26,
        isMarried: false,
        nationality: "Pakistani",
      },
      {
        name: "Sakib",
        email: "sakib@mail.com",
        age: 28,
        isMarried: true,
        nationality: "Bangladeshi",
      },
    ],
  });
})().then(() => prisma.$disconnect());
