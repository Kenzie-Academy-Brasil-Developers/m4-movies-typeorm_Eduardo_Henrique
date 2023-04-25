import { z } from "zod";

export const movieSchema = z.object({
  id: z.number(),
  name: z.string().max(50).nonempty(),
  description: z.string().optional(),
  duration: z.number(),
  price: z.number()
});
