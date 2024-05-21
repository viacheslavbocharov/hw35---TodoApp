import './TodoList.scss';
import axios from "axios";
import { API_TODOS, API_URL, API_DELETE, API_UPDATE } from "../../urls";
import { useState } from 'react';
import { useRef } from 'react';


function TodoRow({ title, id, deleteTodo, token, setTodos }) {

  const [isEditFieldRequire, setIsEditFieldRequire] = useState(false)
  const titleRef = useRef(title);

  const showEditField = () => {
    setIsEditFieldRequire(true);
  }

  const editTodo = async (id) => {

    const result = await axios.put(API_URL + API_UPDATE + id, {
      title: titleRef.current.value
    },
      {
        headers: {
          'Authorization': token
        }
      });
    console.log(result.data)
    setIsEditFieldRequire(false);
    setTodos(result.data)
  }

  return (
    <li className="todo-row" key={id}>
      {!isEditFieldRequire && <div>{title}</div>}
      {isEditFieldRequire &&
        <div className="todo-field">
          <input className="input" ref={titleRef} type="text" defaultValue={title} />
        </div>}
      <div className="todo-btns">
        <div>
          {!isEditFieldRequire && <div><input className="btn edit" type="button" value="Edit" onClick={showEditField} /></div>}
          {isEditFieldRequire && <input className="btn change" type="button" value="Save" onClick={() => editTodo(id)} />}
        </div>
        <input className="btn delete" type="button" value="Delete" onClick={() => deleteTodo(id)} />
      </div>
    </li>
  )
}

export default function TodoList({ values = [], deleteTodo, token, setTodos }) {

  
  return (
    <ul className='todo-list'>
      {values.map(item => <TodoRow key={item.id} title={item.title} id={item.id} deleteTodo={deleteTodo} token={token} setTodos={setTodos}/>)}
    </ul>
  )
}