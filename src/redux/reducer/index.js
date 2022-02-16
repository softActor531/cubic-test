import { ADD_ENTRY } from "../actions/types";

const initialState = {
  entries: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return {
        ...state,
        entries: [
          ...state.entries,
          action.payload
        ]
      };
    default:
      return state;
  }
}