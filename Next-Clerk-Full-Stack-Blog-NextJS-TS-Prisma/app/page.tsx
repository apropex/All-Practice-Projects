import prisma from "@/lib/db";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="p-10">
      <h2>Hello</h2>
    </div>
  );
}