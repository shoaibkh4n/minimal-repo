import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required!!",
  }),
  password: z.string().min(6, {
    message: "Password must be greater than 6 letters",
  }),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;
