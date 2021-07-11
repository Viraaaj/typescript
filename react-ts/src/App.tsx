import Todos from "./components/todos";
import Newtodo from "./components/newtodo";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <Newtodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
