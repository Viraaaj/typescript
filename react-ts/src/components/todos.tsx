import Todo from "../models/todo";
import TodoItem from "./todoItem";
import styles from "./Todos.module.css";

const Todos: React.FC<{ item: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={styles.todos}>
      {props.item.map((item) => (
        <TodoItem
          removeTodo={props.onRemoveTodo.bind(null, item.id)} //Preconfiguring function for future use bind()
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
