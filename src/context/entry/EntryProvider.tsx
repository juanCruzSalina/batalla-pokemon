import React, { ReactNode, useReducer } from 'react'
import { EntryContext } from './EntryContext'
import { EntryAction, EntryReducer } from './entryReducer';

interface IEntryProvider {
  children: ReactNode
}

export type Entry = {
  id: number;
  name: string;
  image: string;
  attack: number;
  defense: number;
}

export interface IEntryState {
  entries: Entry[],
  active: Entry | undefined
}

const initialState: IEntryState = {
  entries: [],
  active: undefined
}

export const EntryProvider = ({children}: IEntryProvider) => {

  const [entryState, dispatch] = useReducer<React.Reducer<IEntryState, EntryAction>>(EntryReducer, initialState)

  const getEntries = (entry: Entry[]) => {
    dispatch({ type: 'getEntries', payload: entry })
  }

  const removeActive = (id: string) => {
    dispatch({ type: 'removeActive', payload: id })
  }

  const setEdit = (id: string) => {
    dispatch({ type: 'setEdit', payload: id })
  }

  return (
    <EntryContext.Provider value={{ entryState, getEntries, removeActive, setEdit}}>
      {children}
    </EntryContext.Provider>
  )
}