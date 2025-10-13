import { z } from 'zod'

export interface ApiRequest {
  formula: string
  timeout: 3 | 5 | 10
  trace: boolean
  options: {
    bussproofs: boolean
    ebproof: boolean
    forest: boolean
  }
}

const ApiResponseSuccessSchema = z.object({
  files: z.object({
    log: z.object({
      info: z.string(),
      trace: z.string().optional(),
    }),
    tex: z.object({
      bussproofs: z.string().optional(),
      ebproof: z.string().optional(),
      forest: z.string().optional(),
    }),
  }),
  result: z.object({
    sequent: z.string(),
    provability: z.literal(true),
    proofTime: z.number(),
    bussproofsTime: z.number().optional(),
    ebproofTime: z.number().optional(),
    forestTime: z.number().optional(),
  }),
})

const ApiResponseUnprovableSchema = z.object({
  files: z.object({
    log: z.object({
      info: z.string(),
      trace: z.string().optional(),
    }),
    tex: z.object({
      countermodel: z.string(),
    }),
  }),
  result: z.object({
    sequent: z.string(),
    provability: z.literal(false),
    proofTime: z.number(),
    bussproofsTime: z.number().optional(),
    ebproofTime: z.number().optional(),
    forestTime: z.number().optional(),
  }),
})

const ApiResponseParseErrorSchema = z.object({
  files: z.object({
    log: z.object({
      info: z.string(),
      trace: z.string().optional(),
    }),
    err: z.object({
      parse: z.string(),
    }),
  }),
  result: z.null(),
})

export const ApiResponseSchema = z.union([
  ApiResponseSuccessSchema,
  ApiResponseUnprovableSchema,
  ApiResponseParseErrorSchema,
])

export type ApiResponse = z.infer<typeof ApiResponseSchema>
