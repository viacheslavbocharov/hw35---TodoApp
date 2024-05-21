import axios from "axios";
import { useEffect, useState } from "react"
import { API_TODOS, API_URL, API_DELETE, API_UPDATE } from "../urls";
import TodoList from "../components/TodoList/TodoList";
import AddTodoItemForm from "../components/AddTodoItemForm/AddTodoItemForm";
import './TodosPage.scss';

export default function TodosPage({ token }) {
  const [todos, setTodos] = useState([]);



  useEffect(async () => {
    const result = await axios.get(API_URL + API_TODOS, {
      headers: {
        'Authorization': token
      }
    });

    console.log(result);
    setTodos(result.data)

  }, []);



  const deleteTodo = async (id) => {

    const result = await axios.delete(API_URL + API_DELETE + id, {
      headers: {
        'Authorization': token
      }
    });
    console.log(result.data)
    setTodos(result.data)
  };



  return (
    <div className="container">
      <h2>Things to do:</h2>
      {!todos.length && (<p>No todos available</p>)}
      {!!todos.length && <TodoList values={todos} deleteTodo={deleteTodo} token={token} setTodos={setTodos} />}
      <AddTodoItemForm token={token} setTodos={setTodos}/>
    </div>
  )
}