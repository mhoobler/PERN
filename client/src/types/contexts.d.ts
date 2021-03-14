interface AppContextType {
  filters: {
    [key: number]: FilterObject;
  }
  todoContainers: TodoType[][];
}

type ActionType = 
  | { type: 'ADD_FILTER' }
  | { type: 'EDIT_FILTER', payload: FilterObject }
  | { type: 'REMOVE_FILTER', payload: number }
  | { type: 'DELTE_TODO', payload: {todo_id: string} }
  | { type: 'POST_TODO', payload: NewTodoType }
  | { type: 'PUT_TODO', payload: TodoType }
