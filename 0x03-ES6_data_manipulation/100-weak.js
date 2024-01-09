/**
 * A weak map of endpoints and the number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Updates the count of API calls made to a specific endpoint using a WeakMap.
 * Throws an error if the number of calls exceeds the maximum allowed.
 *
 * @param {string} endpoint - The API endpoint to query.
 * @throws {Error} Throws an error if the number of calls exceeds the maximum allowed.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
