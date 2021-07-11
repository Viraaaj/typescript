import Todos from "./components/todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn react"), new Todo("Learn ts")];
  return (
    <div>
      <Todos item={todos} />
    </div>
  );
}

export default App;
