import { createContext } from "react";
import { Entry, IEntryState } from "./EntryProvider";

export type EntryContextProps = {
  entryState: IEntryState;
  getEntries: (entry: Entry[]) => void;
  removeActive: (id: string) => void;
  setEdit: (id: string) => void;
}

export const EntryContext = createContext<EntryContextProps>({} as EntryContextProps)