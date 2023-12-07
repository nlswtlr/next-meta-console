import { useEffect, useState, useReducer, Reducer } from "react";
import Image from "next/image";

import type { MetaConsoleProps } from "./main";
import { getMetaElements } from "./lib/helper";
import reducer, { initialState, State, Actions } from "./lib/reducer";
import { consoleWrapper, button, svgIcon } from "./app.module.css";

const App = ({}: Omit<MetaConsoleProps, "enabled">) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useReducer<Reducer<State, Actions>>(reducer, initialState);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        console.log(mutation);
      }
    });
    observer.observe(document.head, { attributes: true, childList: true, subtree: true, characterData: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={consoleWrapper}>
      {isOpen ? (
        <div></div>
      ) : (
        <button className={button} onClick={() => setIsOpen(!isOpen)}>
          <svg
            className={svgIcon}
            width="20"
            height="20"
            viewBox="0 0 92 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.89 7.99001C44.51 7.61001 44.01 7.40001 43.48 7.40001H10.23L3.46004 0.630013C2.68004 -0.149987 1.41004 -0.149987 0.630044 0.630013C-0.149956 1.41001 -0.149956 2.68001 0.630044 3.46001L7.41004 10.24V43.47C7.41004 44 7.62004 44.51 8.00004 44.88L54.47 91.35C54.86 91.74 55.37 91.94 55.88 91.94C56.39 91.94 56.9 91.74 57.29 91.35L91.36 57.28C92.14 56.5 92.14 55.23 91.36 54.45L44.89 7.99001ZM55.89 87.12L11.41 42.65V14.25L16.44 19.28C16.83 19.67 17.34 19.87 17.85 19.87C18.36 19.87 18.87 19.67 19.26 19.28C20.04 18.5 20.04 17.23 19.26 16.45L14.22 11.41H42.64L87.11 55.88L55.89 87.12Z"
              fill="currentColor"
            />
            <path
              d="M28.96 28.93C28.02 29.87 27.56 31.13 27.72 32.31L29.39 44.56C29.53 45.56 30.38 46.29 31.37 46.29C31.46 46.29 31.55 46.28 31.64 46.27C32.73 46.12 33.5 45.11 33.35 44.02L31.7 31.87C31.74 31.8 31.83 31.72 31.89 31.68L44.02 33.38C45.12 33.54 46.13 32.77 46.28 31.68C46.43 30.59 45.67 29.58 44.58 29.42L32.34 27.7C31.16 27.53 29.9 27.99 28.96 28.93Z"
              fill="currentColor"
            />
            <path
              d="M35.5599 50.9C35.8099 51.79 36.6099 52.37 37.4899 52.37C37.6699 52.37 37.8499 52.35 38.0199 52.3L58.2299 46.72C59.2999 46.43 59.9199 45.32 59.6299 44.26C59.3399 43.2 58.2299 42.57 57.1699 42.86L36.9599 48.44C35.8899 48.74 35.2699 49.84 35.5599 50.9Z"
              fill="currentColor"
            />
            <path
              d="M63.59 63.41C63.55 63.48 63.46 63.56 63.4 63.6L51.27 61.9C50.17 61.74 49.16 62.51 49.01 63.6C48.86 64.69 49.62 65.71 50.71 65.86L62.95 67.57C63.11 67.59 63.27 67.6 63.43 67.6C64.46 67.6 65.52 67.15 66.33 66.34C67.27 65.41 67.73 64.14 67.57 62.96L65.9 50.71C65.75 49.61 64.73 48.85 63.65 49C62.56 49.15 61.79 50.16 61.94 51.25L63.59 63.41Z"
              fill="currentColor"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
