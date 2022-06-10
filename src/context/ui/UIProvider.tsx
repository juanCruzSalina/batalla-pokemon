import React, { ReactNode, useReducer } from 'react'
import { UIContext } from './UIContext'
import { UIAction, UIReducer } from './uiReducer'

interface IUIProvider {
  children: ReactNode
}

export interface IUIValues {
  show: boolean;
  edit: boolean;
}

const initialState: IUIValues = {
  show: false,
  edit: false
}

export const UIProvider = ({ children }: IUIProvider) => {

  const [uiState, dispatch] = useReducer<React.Reducer<IUIValues, UIAction>>(UIReducer, initialState)
  const toggleShow = () => {
    dispatch({type: 'toggleShow'})
  }
  const toggleEdit = () => {
    dispatch({type: 'toggleEdit'})
  }

  return (
    <UIContext.Provider value={{ uiState, toggleShow, toggleEdit }}>
      {children}
    </UIContext.Provider>
  )
}
