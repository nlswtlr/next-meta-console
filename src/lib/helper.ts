export function getOgElements() {
  return document.querySelectorAll<HTMLMetaElement>('meta[property^="og:"]');
}
