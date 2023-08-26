import React from "react";
import { ListItem, ListItemText, Checkbox } from "@mui/material";

function TodoItem({ todo, handleTodoComplete }) {
  return (
    <ListItem button onClick={() => handleTodoComplete(todo.id)}>
      <Checkbox checked={todo.complete} />
      <ListItemText primary={todo.name} />
    </ListItem>
  );
}

export default TodoItem;
