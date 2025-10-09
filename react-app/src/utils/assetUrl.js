export function getAssetUrl(relativePath) {
  // Resolve assets in `public/` under any Vite base path without relying on URL()
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '/');
  const path = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  return `${base}${path}`.replace(/\/+/g, '/');
}


