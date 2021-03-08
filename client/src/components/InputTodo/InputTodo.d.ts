export type InputTodo = {
  name: string
  description?: string
  tags?: string[]
}

export interface POST_InputTodo extends InputTodo {
  name: string
  description: string
  tags: string[]
  added: Date
}
