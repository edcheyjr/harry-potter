type FetchParam = {
  url: RequestInfo | URL
  init?: RequestInit
  revalidationTime?: number
}
/**
 * If force-cache is not preferably can be removed
 * Custom Fetch wrapper
 * @param url Request info from fetch
 * @param init  Request Init from fetch
 * @param revalidationTime Time to revalidate the request in seconds default 30 seconds
 * @returns
 */
export default async function customFetch({
  url,
  init,
  revalidationTime = 30,
}: FetchParam) {
  return await fetch(url, {
    next: { revalidate: revalidationTime },
    ...init,
  })
}
