export const NextResponse = {
  json: (body, options) => ({
    json: async () => body,
    status: options?.status || 200,
    headers: new Map(),
  })
};
