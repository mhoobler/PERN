import axios from "axios";

import { InputTodoType } from "../components/InputTodo/InputTodo.d";

const API = {
  test: async () => await axios.get("/_"),
  getAllTodos: async () => await axios.get("/_todos"),
  postNewTodo: async (data: InputTodoType) => await axios.post("todos", data),
};

export default API;
