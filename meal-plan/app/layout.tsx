import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import NavBar from "../components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Meal Plans | Simple SaaS Demo",
  description: "Generate personalized meal plans with OpenAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-50 text-gray-900">
          <NavBar />
          <main className="container mx-auto pt-16 p-4 min-h-screen">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
