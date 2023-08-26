// mocks/mockHandlers.ts
import { rest } from 'msw'

// TODO add all mock fetch handlers for all api request made
export const handlers = [
  rest.get(/.*/, async (req, res, ctx) => {
    return res(ctx.json({ message: 'Mocked response' }))
  }),
]
