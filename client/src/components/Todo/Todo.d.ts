export type TodoType = {
  todo_id: number,
  name: string,
  description?: string,
  tags?: string[],
  added: Date,
  completed?: Date
}

export interface TestTodoType extends TodoType {
  description: string,
  tags: string[],
  completed: Date
}
