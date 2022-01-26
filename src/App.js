import './App.css';
import React, { useState } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Planets from './components/Planets';
import People from './components/People';

function App() {

  const [choice, setChoice] = useState("People");
  const [id, setId] = useState(0);
  // const [loading, setloading] = useState(false);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(choice);
    console.log(id);
    history.push(`/${choice}/${id}`);
    console.log(history);
  }

  return (
    <div className="App">
      <h2>Star Wars</h2>
      <form onSubmit={submitHandler}>
        <input type="number" onChange={(e) => setId(e.target.value)} value={id} min = {1}/>
        <select onChange={(e) => setChoice(e.target.value)} value={choice}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <button>Use the Force</button>
      </form>
        <Switch>
          <Route exact path="/people/:id">
            <People />
          </Route>
          <Route exact path="/planets/:id">
            <Planets />
          </Route>
        </Switch>
    </div>
      );
}

export default App;
