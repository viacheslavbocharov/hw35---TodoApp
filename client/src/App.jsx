import axios from 'axios';
import './App.scss';
import MainPage from './pages/MainPage';
import TodosPage from './pages/TodosPage';
import { useState, useEffect } from 'react';

function App() {
  
  const [isAuthorized, setIsAuthorized] = useState(() => {
    const savedToken = localStorage.getItem('token');
    return savedToken ? true : false;
  });
  
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token');
  });
  
  const handleUserSignIn = (token) => {
    console.log(`I received token: ${token}`);
    setIsAuthorized(true);
    setToken(token);
    localStorage.setItem('token', token);
  }



  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthorized(true);
    }
  }, []);



  return (
    <div className="app">
      <h1 className='app__title'>Todo App</h1>
      {!isAuthorized && <MainPage handleAuth={handleUserSignIn} />}
      {isAuthorized && <TodosPage token={token}/>}
    </div>
  );
}

export default App;
