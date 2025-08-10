import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/users", async (_, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
