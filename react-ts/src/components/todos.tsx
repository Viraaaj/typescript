import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./todoItem";
import styles from "./Todos.module.css";

const Todos: React.FC = () => {
  const todos_context = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todos_context.items.map((item) => (
        <TodoItem
          removeTodo={todos_context.removeTodo.bind(null, item.id)} //Preconfiguring function for future use bind()
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
