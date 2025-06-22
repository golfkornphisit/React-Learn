import Header from "./components/Header";
import PersonList from "./components/PersonList";
import AddForm from "./components/AddForm";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState([
      { id: 1, name: "Korn", gender: "ชาย" },
      { id: 2, name: "Nim", gender: "หญิง" },
      { id: 3, name: "John Doe", gender: "ชาย" },
      { id: 4, name: "Poy", gender: "หญิง" },
    ]);
    function deleteUser(id) {
        const result = data.filter((user) => user.id !== id); // filter out the user with the given id
        setData(result); // update the state with the new data
    }
    useEffect(() => {
        console.log("Render Component")
    },[data]); // useEffect to log when data changes

  return (
    <div className="App">
      <Header title="My Appicetion"/>
      <main>
        <AddForm data={data} setData={setData}/>
        <PersonList data={data} deleteUser={deleteUser}/>
      </main>
      

    </div>
  );
}

export default App;
