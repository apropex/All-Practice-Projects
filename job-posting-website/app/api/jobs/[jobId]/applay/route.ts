import { auth } from "@/auth";
import { iParams } from "@/interfaces";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: iParams<string>) {
  const session = await auth();
  if (!session?.user || !session.user.id) {
    const url = new URL("/auth/signin", req.url);
    return NextResponse.redirect(url);
  }

  const userId = session.user.id;

  try {
    const id = (await params).id;
    const job = await prisma.job.findUnique({ where: { id } });

    if (!job) return new NextResponse("Job not found", { status: 404 });

    const existingApplication = await prisma.application.findFirst({
      where: { id, userId },
    });

    if (existingApplication)
      return new NextResponse("You already have applied for this job", {
        status: 400,
      });

    const application = await prisma.application.create({
      data: {
        jobId: id,
        userId,
        status: "PENDING",
      },
    });

    return NextResponse.json(application);
  } catch (error) {
    console.log("Error creating job: ", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
