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

type FilterInputs = {
  name: string,
  description: string,
  tags: string
}

interface FilterObject extends FilterInputs {
  id: number;
  tags: string[]
}

type FilterQuery = {
  name: string;
  description: string;
  tags: string[]
}
