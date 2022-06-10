import { createContext } from 'react'
import { IUIValues } from './UIProvider';

export type IUIContext = {
  uiState: IUIValues,
  toggleShow: () => void,
  toggleEdit: () => void
}

export const UIContext = createContext<IUIContext>({} as IUIContext);


