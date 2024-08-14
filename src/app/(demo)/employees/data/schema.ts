import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const employeeSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string(),
  status: z.enum(['active', 'inactive']),
  registrationDate: z.string().transform((str) => new Date(str)),
  birthDate: z.string(),
  isActive: z.boolean(),
  jobTitle: z.string(),
  phoneNumber: z.string(),
  personalIdCode: z.string(),
});

export type Employee = z.infer<typeof employeeSchema>
