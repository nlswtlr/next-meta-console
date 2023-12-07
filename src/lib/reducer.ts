export type State = {
  title: string;
  description?: string;
  og?: {
    title?: string;
    description?: string;
    image?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
  };
};

export type Actions = { type: "SET_TITLE"; payload: string };

export const initialState: State = {
  title: "",
};

export default function reducer(state: State, action: Actions) {
  switch (action.type) {
    default:
      return state;
  }
}
