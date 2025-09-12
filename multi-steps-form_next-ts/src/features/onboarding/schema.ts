import { z } from "zod";

export const onboardingSchema = z.object({
  username: z.string().min(3).max(25),
  firstName: z.string().min(3).max(25),
  lastName: z.string().min(3).max(25),
  password: z.string().min(3).max(25),
  repeatPassword: z.string().min(3).max(25),
  terms: z.boolean().refine((data) => data),
});

export type OnboardingSchema = z.infer<typeof onboardingSchema>;
