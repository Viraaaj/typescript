import Todo from "../models/todo";
import TodoItem from "./todoItem";
import styles from "./Todos.module.css";

const Todos: React.FC<{ item: Todo[] }> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.item.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
