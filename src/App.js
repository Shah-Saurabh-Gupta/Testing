import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //When the app loads, we need to listen to the db and fetch new todos as they get added/removed.
  useEffect(() => {
    //This code here fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc =>({id: doc.id ,todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (Event) => {
    //This will fire off when we click the button
    Event.preventDefault(); //It will stop the page from refreshing.

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); //To clear up the input.
  }

  return (
    <div className="App">
      <h1>Today's Todo List</h1>

      <form>
        <FormControl>
          <InputLabel>Add a Todo</InputLabel>
          <Input value={input} onChange={Event => setInput(Event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
