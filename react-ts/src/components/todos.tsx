import Todo from "../models/todo";
import TodoItem from "./todoItem";

const Todos: React.FC<{ item: Todo[] }> = (props) => {
  return (
    <ul>
      {props.item.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
