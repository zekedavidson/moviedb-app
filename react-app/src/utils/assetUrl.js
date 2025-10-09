export function getAssetUrl(relativePath) {
  // Ensures assets in `public/` resolve correctly under any Vite base path
  const base = import.meta.env.BASE_URL || '/';
  const normalized = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  return new URL(normalized, base).pathname;
}


