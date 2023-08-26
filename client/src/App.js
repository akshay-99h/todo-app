import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoName, setNewTodoName] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/todos");
      setTodos(response.data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddTodo = async () => {
    if (newTodoName.trim() === "") return;

    try {
      await axios.post("http://localhost:3001/todo", { name: newTodoName });
      setNewTodoName("");
      fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleTodoComplete = async (id) => {
    try {
      await axios.put(`http://localhost:3001/todos/${id}/complete`);
      fetchTodos();
    } catch (error) {
      console.error("Error marking todo as complete:", error);
    }
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todo List</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: "20px" }}>
        <TextField
          fullWidth
          label="Enter new todo..."
          variant="outlined"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
          onClick={handleAddTodo}
        >
          Add Todo
        </Button>
        <TodoList todos={todos} handleTodoComplete={handleTodoComplete} />
      </Container>
    </div>
  );
}

export default App;
