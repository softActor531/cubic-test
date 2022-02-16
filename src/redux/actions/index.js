import { ADD_ENTRY } from "./types";

// Add entry to the list
export const addEntry = (entry) => {
  return {
    type: ADD_ENTRY,
    payload: entry
  };
}