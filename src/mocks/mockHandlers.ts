// mocks/mockHandlers.ts
import { rest } from 'msw'

export const handlers = [
  rest.get(/.*/, async (req, res, ctx) => {
    return res(ctx.json({ message: 'Mocked response' }))
  }),
]
