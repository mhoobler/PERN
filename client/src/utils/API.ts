import axios from "axios";

const API = {
  test: async () => await axios.get("/_"),
  getAllTodos: async () => await axios.get("/_todos"),
  getFilterTodos: async (filter: FilterQuery) => await axios.get("/_todos", {params: {...filter}}),
  postNewTodo: async (data: NewTodoType) => await axios.post("/_todos", data),
};

export default API;
