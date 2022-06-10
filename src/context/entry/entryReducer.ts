import { Entry, IEntryState } from "./EntryProvider"

export type EntryAction =
  | { type: 'getEntries', payload: Entry[]}
  | { type: 'removeActive', payload: string }
  | { type: 'setEdit', payload: string}

export const EntryReducer = (state: IEntryState, action: EntryAction) => {
  switch (action.type) {
    case 'getEntries':
      return {
        ...state,
        entries: action.payload
      }
    case 'removeActive':
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== parseInt(action.payload))
      }

    case 'setEdit':
      return {
        ...state,
        active: state.entries.find(entry => entry.id === parseInt(action.payload))
      }

    default:
      return state
  }
}