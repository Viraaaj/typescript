class Todo {
  id: string;
  text: string;

  // We need to add constructor to make sure that the above properties will receive values
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;

//If we have multiple objects then we can do something like above to define types
