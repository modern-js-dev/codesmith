/**
 * when promise is timeput, reject promise
 * @param {Promise} promise
 * @param {number} ms
 * @param {string} reason
 * @returns {Promise}
 */
export async function timeoutPromise(
  promise: Promise<any>,
  ms: number,
  reason = 'Operation',
) {
  let timeoutId: NodeJS.Timeout | null = null;
  const delayPromise = (ms: number) =>
    new Promise(resolve => {
      timeoutId = setTimeout(resolve, ms);
    });
  const timeout = delayPromise(ms).then(() => {
    throw new Error(`${reason} timed out after ${ms}ms`);
  });
  try {
    const result = await Promise.race([promise, timeout]);
    return result;
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}
