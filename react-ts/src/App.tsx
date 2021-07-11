import Todos from "./components/todos";
import Todo from "./models/todo";
import Newtodo from "./components/newtodo";

function App() {
  const todos = [new Todo("Learn react"), new Todo("Learn ts")];

  const addTodohandler = (todoText: string) => {
    //Adding state
  };

  return (
    <div>
      <Newtodo onAddTodo={addTodohandler} />
      <Todos item={todos} />
    </div>
  );
}

export default App;
