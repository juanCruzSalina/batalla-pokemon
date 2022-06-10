import { IUIValues } from "./UIProvider";

export type UIAction =
  | { type: 'toggleShow' }
  | { type: 'toggleEdit' }

export const UIReducer = ( state: IUIValues, action: UIAction ) => {
  switch ( action.type ) {
    case 'toggleShow':
      return {
        ...state,
        show: !state.show
      }
    case 'toggleEdit':
      return {
        ...state,
        edit: !state.edit
      }
    default:
      return state
  }
}