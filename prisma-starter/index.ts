import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/users", async (_, res) => {
  /*
  const users = await prisma.user.findMany({
    where: { isMarried: true, age: { gt: 25 } },
  });
  
  const users = await prisma.user.findMany({
    where: {
      OR: [{ nationality: "Bangladeshi" }, { age: { gte: 23 } }],
    },
  });
  
  const users = await prisma.user.findMany({
    where: {
      nationality: { in: ["Irish", "German", "Portuguese"] },
    },
  });
  */

  const users = await prisma.user.findMany({
    where: {
      nationality: { not: "Bangladeshi" },
    },
  });

  res.json(users);
});

app.put("/users", async (req, res) => {
  const users = await prisma.user.update({
    where: { email: "rakib@mail.com" },
    data: req.body,
  });
  res.json(users);
});

app.delete("/users", async (req, res) => {
  /*
  const users = await prisma.user.deleteMany({
    where: { age: { gt: 25 } },
  });
  */

  const users = await prisma.user.delete({
    where: { email: "sakib@mail.com" },
  });
  res.json(users);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
