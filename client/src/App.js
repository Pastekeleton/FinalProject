import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from "./Login"
import { Register } from "./Register"

function App() {
 /* const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  */
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
