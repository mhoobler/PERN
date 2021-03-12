import { InputTodoType } from "../InputTodo/InputTodo.d";

export interface TodoType extends InputTodoType {
  todo_id: number;
  added: Date;
  completed: Date;
}
