"use client";

import { useOnboardingStore } from "@/app/onboarding/store";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { onboardingSchema } from "../schema";

const onboardingPasswordSchema = onboardingSchema.pick({
  password: true,
  repeatPassword: true,
});

type OnboardingPasswordSchema = z.infer<typeof onboardingPasswordSchema>;

export default function OnboardingPasswordForm() {
  const router = useRouter();
  const setData = useOnboardingStore(({ setData }) => setData);

  const firstName = useOnboardingStore(({ firstName }) => firstName);
  const lastName = useOnboardingStore(({ lastName }) => lastName);

  //
  const form = useForm<OnboardingPasswordSchema>({
    resolver: zodResolver(onboardingPasswordSchema),
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
  });

  useEffect(() => {
    const { state } = JSON.parse(localStorage.getItem("onboarding-storage") || "");
    if (state) {
      form.setValue("password", state.password);
      form.setValue("repeatPassword", state.repeatPassword);
    }
    console.log(state);
  }, [form]);

  const onSubmit = (data: OnboardingPasswordSchema) => {
    setData(data);
    router.push("/onboarding/username");
    console.log(data);
  };

  useEffect(() => {
    if (!useOnboardingStore.persist.hasHydrated) return;

    if (!firstName || !lastName) {
      router.push("/onboarding/name");
    }
  }, [useOnboardingStore.persist.hasHydrated, firstName, lastName, router]);

  return (
    <div className="w-96 mx-auto m-16 bg-gray-100/50 border rounded-2xl p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" id="onboardingPasswordForm">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormDescription>This is your password</FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="repeatPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormDescription>This is your confirm password</FormDescription>
              </FormItem>
            )}
          />
        </form>

        <div className="mt-8 flex justify-between items-center">
          <Button type="submit" variant="outline" asChild>
            <Link href={"/onboarding/name"}>Previous</Link>
          </Button>
          <Button type="submit" form="onboardingPasswordForm">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
}
