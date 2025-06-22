import Header from "./components/Header";
import PersonList from "./components/PersonList";
import { useState } from "react";
import "./App.css";

function App() {
    const [data] = useState([
      { id: 1, name: "Korn", gender: "ชาย" },
      { id: 2, name: "Nim", gender: "หญิง" },
      { id: 3, name: "John Doe", gender: "ชาย" },
      { id: 4, name: "Poy", gender: "หญิง" },
    ]);  
  return (
    <div className="App">
      <Header title="MY APP"/>
      <main>
        <PersonList data={data}/>
      </main>
      

    </div>
  );
}

export default App;
