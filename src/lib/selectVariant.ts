export function selectVariant<T>(
  variants: T[],
  seed: string
): T {
  if (variants.length === 1) return variants[0];

  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }

  const index = Math.abs(hash) % variants.length;
  return variants[index];
}