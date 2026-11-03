/**
 * Prefix a root-relative path with the site's base path.
 * On GitHub Pages the site lives under /NarciseTriano, so "/partner"
 * becomes "/NarciseTriano/partner". With no base set it's a no-op.
 * External URLs (https://, mailto:, tel:) pass through unchanged.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function u(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
}
