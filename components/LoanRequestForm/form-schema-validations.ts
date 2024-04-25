import { z } from "zod";

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.too_small) {
    return {
      message: "Este campo es requerido.",
    };
  }
  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);

export const loanReqFormSchema = z.object({
  fullname: z.string().min(1),
  dni: z.string().min(1),
  calle: z.string().min(1),
  altura: z.string().min(1),
  depto: z.string().min(1),
  localidad: z.string().min(1),
  postal: z.string().min(1),
  area: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().min(1).email(),
  "child-link": z.string().min(1),
  "child-fullname": z.string().min(1),
  "child-dni": z.string().min(1),
});

export type LoanReqFormSchema = z.infer<typeof loanReqFormSchema>;
export type LoanReqFormSchemaErrors = z.inferFlattenedErrors<
  typeof loanReqFormSchema
>;
