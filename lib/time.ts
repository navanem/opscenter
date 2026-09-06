/**
 * Returns a single wall-clock snapshot for server-side request calculations.
 * Keeping the impure read outside React render logic makes the dependency explicit.
 */
export function getCurrentTimeMs(): number {
  return Date.now();
}
