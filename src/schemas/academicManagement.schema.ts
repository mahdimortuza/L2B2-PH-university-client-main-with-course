import { z } from "zod";

export const academicSemesterSchema = z.object({
    name: z.string({required_error: "please select a name"}),
    year: z.string({required_error: "please select a year"}),    
    startMonth: z.string({required_error: "please select a start month"}),    
    endMonth: z.string({required_error: "please select a end month"})
  })