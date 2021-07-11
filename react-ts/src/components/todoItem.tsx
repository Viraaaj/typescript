import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; removeTodo: () => void }> = (
  props
) => {
  return (
    <li onClick={props.removeTodo} className={styles.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
