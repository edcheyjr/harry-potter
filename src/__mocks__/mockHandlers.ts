// mocks/mockHandlers.ts
import { HttpResponse, Path, http } from 'msw'

// TODO add all mock fetch handlers for all api request made
export const handlers = [
  http.get(/.*/, async function ({ request, params }) {
    return HttpResponse.json({ message: 'Mocked response' })
  }),
]
