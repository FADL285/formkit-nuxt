export function wait(ms: number): Promise<never> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
