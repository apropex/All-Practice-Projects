"use client";

import { iChildren } from "@/interfaces";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export default function ReactQueryClientProvider({ children }: iChildren) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
