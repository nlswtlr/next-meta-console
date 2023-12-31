import type { Actions } from "./reducer";

export function queryElements(dispatch: React.Dispatch<Actions>) {
  const elements = {
    title: document.head.querySelector<HTMLMetaElement>("title"),
    description: document.head.querySelector<HTMLMetaElement>("meta[name='description']"),
    ogElements: document.head.querySelectorAll<HTMLMetaElement>('meta[property^="og:"]'),
    twitterElements: document.head.querySelectorAll<HTMLMetaElement>('meta[name^="twitter:"]'),
  };

  dispatch({ type: "SET_TITLE", payload: elements.title?.textContent || "" });

  dispatch({ type: "SET_DESC", payload: elements.description?.getAttribute("content") || "" });

  elements.ogElements.forEach((element) => {
    const property = element.getAttribute("property");

    if (property === "og:image") {
      dispatch({ type: "SET_IMAGE", payload: element.getAttribute("content") || "" });
    }
  });

  if (!elements.ogElements.length) {
    dispatch({ type: "SET_IMAGE", payload: "" });
  }
}
