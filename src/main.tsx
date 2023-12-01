import { useEffect, useState } from "react";

import { getOgElements } from "./lib/helper";

type MetaConsoleProps = {
  enabled?: boolean;
};

const NextMetaConsole = ({ enabled = true }: MetaConsoleProps) => {
  if (!enabled) return null;

  const [isOpen, setIsOpen] = useState(false);
  const [rows, setRows] = useState<{ title: string; content: string }[]>([]);

  useEffect(() => {
    const ogElements = getOgElements();

    for (const element of Array.from(ogElements)) {
      const prop = element.getAttribute("property");

      if (prop === "og:image") {
        setRows((prev) => [...prev, { title: "og:image", content: element.getAttribute("content") || "" }]);
      }
    }

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        console.log(mutation.type);
        for (const addedNode of Array.from(mutation.addedNodes)) {
          console.log(addedNode);
        }
      }
    });
    observer.observe(document.head, { childList: true, subtree: true, attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: "fixed", right: "20px", bottom: "20px" }}>
      {isOpen ? (
        <ul>
          {rows.map((row) => (
            <li>
              {row.title}:{" "}
              <a href={row.content} target="_blank">
                image
              </a>
            </li>
          ))}
        </ul>
      ) : null}
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "close" : "open"}</button>
    </div>
  );
};

export default NextMetaConsole;
