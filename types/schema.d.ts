/**
 * Schemas in Fastify follow the JSON-Schema standard. For this reason
 * we have opted to not ship strict schema based types. Instead we provide
 * an example in our documentation on how to solve this problem. Check it
 * out here:
 */
export type FastifySchema = {
  body?: unknown,
  querystring?: unknown,
  params?: unknown,
  headers?: unknown
};

/**
 * Compiler for FastifySchema Type
 */
export type FastifySchemaCompiler = (schema: FastifySchema) => unknown