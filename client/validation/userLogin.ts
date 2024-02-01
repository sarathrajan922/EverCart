import { z } from "zod";

export const userLoginSchema = z.object({
    email: z.string().email({ message: "An email is required!" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .refine((value) => /[A-Z]/.test(value) && /\d/.test(value), {
        message:
          "Password must contain at least one uppercase letter and one number",
      }),
})