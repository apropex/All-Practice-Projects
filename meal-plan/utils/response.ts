import { NextResponse } from "next/server";

interface ResProps<T> {
  success?: boolean;
  message: string;
  status: number;
  data?: T;
}

export const response = <T>({
  success = true,
  message,
  status,
  data = null,
}: ResProps<T>) => {
  return NextResponse.json({ success, message, data }, { status });
};
