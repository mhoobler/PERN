interface AppContextType {
  filters: {
    [key: number]: FilterObject;
  }
}

type ActionType = 
  | { type: 'ADD_FILTER' }
  | { type: 'EDIT_FILTER', payload: FilterObject }
  | { type: 'REMOVE_FILTER', payload: number }
