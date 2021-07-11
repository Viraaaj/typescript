import Todos from "./components/todos";
import Todo from "./models/todo";
import Newtodo from "./components/newtodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodohandler = (todoText: string) => {
    //Adding state
    const newTodo = new Todo(todoText);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const removeTodohandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <Newtodo onAddTodo={addTodohandler} />
      <Todos onRemoveTodo={removeTodohandler} item={todos} />
    </div>
  );
}

export default App;
