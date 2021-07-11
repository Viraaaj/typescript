import { useRef } from "react";

const Newtodo = () => {
  //While using refs we need to set where we are using ref: eg. input button etc also set starting value
  const todoTextInput = useRef<HTMLInputElement>(null);

  //While using events in ts we need to set a type for event using Rect.type
  const submitTodoHandlder = (event: React.FormEvent) => {
    event.preventDefault();

    //Here ? is telling ts that if there is any value then store in the enteredText otherwise store null
    //If you are 100% sure that the value will never be null then you can use ! rather than ?
    const enteredText = todoTextInput.current!.value;

    if (enteredText.trim().length === 0) {
      //Throw an error
      return;
    }
  };

  return (
    <form onSubmit={submitTodoHandlder}>
      <label htmlFor="text">Enter task</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default Newtodo;
