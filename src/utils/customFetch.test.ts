import customFetch from './customFetch'
import { setupServer } from 'msw/node'
import { handlers } from '@mock/mockHandlers'

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('customFetch', () => {
  it('fetches data successfully', async () => {
    const response = await customFetch({
      url: '/api/data',
      init: { method: 'GET' },
    })

    const data = await response.json()
    expect(data.message).toBe('Mocked response')
  })

  it('handles revalidationTime correctly', async () => {
    // Mock the Date object to control the current time
    const originalDateNow = jest.fn(() => 0)
    Date.now = jest.fn(() => 0) // Set the current time to 0 milliseconds

    // Fetch with revalidationTime set to 10 seconds
    const data = await customFetch({
      url: '/api/data',
      init: { method: 'GET' },
      revalidationTime: 10,
    })

    // Advance the mock time by 11 seconds
    Date.now = originalDateNow.mockReturnValueOnce(11000)

    // Fetch again, should trigger a revalidation
    const newData = await customFetch({
      url: '/api/data',
      init: { method: 'GET' },
      revalidationTime: 10,
    })

    // Verify that fetch was called twice
    expect(server.handlers[0].calls).toHaveLength(2)

    // Restore the original Date object
    Date.now = originalDateNow
  })

  it('handles cacheMechanism correctly', async () => {
    const data = await customFetch({
      url: '/api/data',
      init: { method: 'GET' },
      cacheMechanism: 'no-cache',
    })

    expect(server.handlers[0].calls).toHaveLength(1)

    const newData = await customFetch({
      url: '/api/data',
      init: { method: 'GET' },
      cacheMechanism: 'force-cache',
    })

    expect(server.handlers[0].calls).toHaveLength(2)
  })
})
