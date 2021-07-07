const Todos: React.FC<{ item: string[] }> = (props) => {
  return (
    <ul>
      {props.item.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
