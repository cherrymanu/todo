import React, { useState } from 'react';
import "./App.css"
import logo from "./logo.svg"
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }
 
 
 return (
   <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
     <Header />
     <ToDoList toDoList={toDoList}/>
     <ToDoForm addTask={addTask}/>
   </div>
 );
}
 
export default App;

// class App() {
  
//     //const [ toDoList, setToDoList ] = useState(data);
//     return (
      
//       // <div className="App">
//       //   <div className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <h2>Hello Reach</h2>
//       //   </div>
//       //   <p className="App-intro">
//       //     To get started, edit <code>src/App.js</code> and save to reload.
//       //   </p>
//       // </div>
//      <div className="App">
//        <Header /> 
//       </div>

//     );
  
// }

// export default App;
