type NewTodoType = {
  name: string;
  description: string;
  tags: string[];
};

interface TodoType extends NewTodoType {
  todo_id: number;
  added: Date;
  completed: Date;
}
