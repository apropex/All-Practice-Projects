"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface ApiResponse {
  message?: string;
  error?: string;
}

async function createProfileRequest(): Promise<ApiResponse> {
  const response = await fetch("/api/create-profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

export default function CreateProfile() {
  const router = useRouter();

  const { isLoaded, isSignedIn } = useUser();

  const { mutate, isPending } = useMutation<ApiResponse, Error>({
    mutationFn: createProfileRequest,
    onSuccess: () => {
      router.push("/subscribe");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (isLoaded && isSignedIn && !isPending) {
      mutate();
    }
  }, [isLoaded, isSignedIn, mutate, isPending]);

  return (
    <div className="">
      <h1 className="">This is CreateProfile component</h1>
    </div>
  );
}
