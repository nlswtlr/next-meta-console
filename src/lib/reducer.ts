export type State = {
  title: string;
  description?: string;
  image?: string;
  og?: {
    title?: string;
    description?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
  };
};

export type Actions =
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_DESC"; payload: string }
  | { type: "SET_IMAGE"; payload: string };

export const initialState: State = {
  title: "",
};

export default function reducer(state: State, action: Actions) {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_DESC":
      return { ...state, description: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    default:
      return state;
  }
}
