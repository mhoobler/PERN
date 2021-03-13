import { NewTodoType } from "../InputTodo/InputTodo.d";

export interface TodoType extends NewTodoType {
  todo_id: number;
  added: Date;
  completed: Date;
}
