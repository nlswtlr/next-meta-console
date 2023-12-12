import type { Actions } from "./reducer";

export function handleMutation(mutation: MutationRecord, dispatch: React.Dispatch<Actions>) {
  if (mutation.type === "characterData") {
    return dispatch({ type: "SET_TITLE", payload: mutation.target.textContent || "" });
  }
  if (mutation.target.nodeName === "META" && mutation.target instanceof HTMLElement) {
    return dispatch({ type: "SET_DESC", payload: mutation.target.getAttribute("content") || "" });
  }
  mutation.addedNodes.forEach((node) => {
    if (!(node instanceof HTMLElement)) {
      return;
    }
    const property = node.getAttribute("property");

    if (property === "og:image") {
      dispatch({ type: "SET_IMAGE", payload: node.getAttribute("content") || "" });
    }
  });
  mutation.removedNodes.forEach((node) => {
    if (!(node instanceof HTMLElement)) {
      return;
    }
    const property = node.getAttribute("property");

    if (property === "og:image") {
      dispatch({ type: "SET_IMAGE", payload: "" });
    }
  });
}

export function setInitialState(dispatch: React.Dispatch<Actions>) {
  const elements = {
    title: document.head.querySelector<HTMLMetaElement>("title"),
    description: document.head.querySelector<HTMLMetaElement>("meta[name='description']"),
    ogElements: document.head.querySelectorAll<HTMLMetaElement>('meta[property^="og:"]'),
    twitterElements: document.head.querySelectorAll<HTMLMetaElement>('meta[name^="twitter:"]'),
  };

  if (elements.title) {
    dispatch({ type: "SET_TITLE", payload: elements.title.textContent || "" });
  }

  if (elements.description) {
    dispatch({ type: "SET_DESC", payload: elements.description.getAttribute("content") || "" });
  }

  elements.ogElements.forEach((element) => {
    const property = element.getAttribute("property");

    if (property === "og:image") {
      dispatch({ type: "SET_IMAGE", payload: element.getAttribute("content") || "" });
    }
  });
}
