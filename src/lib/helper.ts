export function getMetaElements() {
  return {
    title: document.head.querySelector<HTMLMetaElement>("title"),
    description: document.head.querySelector<HTMLMetaElement>("meta[name='description']"),
    ogElements: document.head.querySelectorAll<HTMLMetaElement>('meta[property^="og:"]'),
    twitterElements: document.head.querySelectorAll<HTMLMetaElement>('meta[name^="twitter:"]'),
  };
}
