import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user || !session.user.id) {
    const url = new URL("/auth/signin", req.url);
    return NextResponse.redirect(url);
  }

  try {
    const data = await req.json();

    const job = await prisma.job.create({
      data: {
        ...data,
        postedById: session.user.id,
      },
    });

    return NextResponse.json(job);
  } catch (error) {
    console.log("Error creating job: ", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: {
        postedAt: "desc",
      },
    });

    return NextResponse.json(jobs);
  } catch (error) {
    console.log("Error creating job: ", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
