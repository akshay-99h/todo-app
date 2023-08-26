import React from "react";
import { List, ListItem, ListItemText, Checkbox } from "@mui/material";

function TodoList({ todos, handleTodoComplete }) {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          button
          onClick={() => handleTodoComplete(todo.id)}
        >
          <Checkbox checked={todo.complete} />
          <ListItemText primary={todo.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
