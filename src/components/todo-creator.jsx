import "./todo-creator.css";

export function FormCreator({ createTodo }) {

  const sumbitTheForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const todoTitle = form.todoTitle;
    createTodo(todoTitle.value);
    console.log(event);
    form.reset();
  }

  return (
    <div className="todo-form">
      <label> Todo creator </label>
      <form onSubmit={sumbitTheForm}>
        <div className="d-flex form-group">
          <input type="text" name="todoTitle" placeholder="Add todo" className="form-control me-2"/>
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
}
