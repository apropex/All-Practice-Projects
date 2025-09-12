"use client";

import { useOnboardingStore } from "@/app/onboarding/store";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { onboardingSchema } from "../schema";

const onboardingUsernameSchema = onboardingSchema.pick({
  username: true,
  terms: true,
});

type OnboardingUsernameSchema = z.infer<typeof onboardingUsernameSchema>;

export default function OnboardingUsernameForm() {
  const router = useRouter();

  const firstName = useOnboardingStore((state) => state.firstName);
  const lastName = useOnboardingStore((state) => state.lastName);
  const password = useOnboardingStore((state) => state.password);
  const repeatPassword = useOnboardingStore((state) => state.repeatPassword);

  const form = useForm<OnboardingUsernameSchema>({
    resolver: zodResolver(onboardingUsernameSchema),
    defaultValues: {
      username: "",
      terms: false,
    },
  });

  const onSubmit = (data: OnboardingUsernameSchema) => {
    console.log({
      ...data,
      firstName,
      lastName,
      password,
      repeatPassword,
    });
  };

  useEffect(() => {
    if (!useOnboardingStore.persist.hasHydrated) return;

    if (!firstName || !lastName || !password || !repeatPassword) {
      router.push("/onboarding/name");
    }
  }, [useOnboardingStore.persist.hasHydrated, firstName, lastName, password, repeatPassword, router]);

  return (
    <div className="w-96 mx-auto m-16 bg-gray-100/50 border rounded-2xl p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormDescription>This is your username.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>I agree to the terms of service.</FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
        <div className="mt-8 flex justify-between items-center">
          <Button type="submit" variant="outline" asChild>
            <Link href={"/onboarding/password"}>Previous</Link>
          </Button>
          <Button type="submit" form="onboardingPasswordForm">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
}
