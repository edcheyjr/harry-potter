type FetchParam = {
  url: RequestInfo | URL
  init?: RequestInit
  revalidationTime?: number
  cacheMechanism?: RequestCache //
}
/**
 * If force-cache is not preferably can be removed
 * Custom Fetch wrapper
 * @param url Request info from fetch
 * @param init  Request Init from fetch
 * @param revalidationTime Time to revalidate the request in seconds default 30 seconds
 * @param cacheMechanism  "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload"
 * @returns
 */
export default async function customFetch({
  url,
  init,
  revalidationTime = 0,
  cacheMechanism = 'force-cache',
}: FetchParam) {
  return await fetch(url, {
    next: { revalidate: revalidationTime },
    cache: cacheMechanism,
    ...init,
  })
}
