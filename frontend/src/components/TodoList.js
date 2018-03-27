import React from "react";
import TodoListItem from "./TodoListItem";
import { List } from "immutable";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: null
    };
  }

  render() {
    return (
      <ul id="TodoList">
        {List(this.props.todos)
          .sort((a, b) => (a.id < b.id ? -1 : 1))
          .map((todo, idx) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              idx={idx}
              isEditing={this.state.isEditing}
              beginEdit={this.setEditingStatus.bind(this, todo.id)}
              endEdit={this.clearEditingStatus.bind(this)}
            />
          ))}
      </ul>
    );
  }

  setEditingStatus(todoID) {
    this.setState({
      isEditing: todoID
    });
  }

  clearEditingStatus() {
    this.setState({
      isEditing: null
    });
  }
}

export default TodoList;