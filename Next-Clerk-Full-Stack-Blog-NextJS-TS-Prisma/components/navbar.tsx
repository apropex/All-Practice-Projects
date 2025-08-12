import Link from "next/link";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black">
          NextClerk
        </Link>

        <div className="space-x-4 flex">
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          {/*
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          */}
        </div>
      </nav>
    </header>
  );
}
