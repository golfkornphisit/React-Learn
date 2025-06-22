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

  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light"); // state to manage theme

  function deleteUser(id) {
    const result = data.filter((user) => user.id !== id); // filter out the user with the given id
    setData(result); // update the state with the new data
  }

  useEffect(() => {
    localStorage.setItem("mode", theme); // save theme to localStorage
  }, [theme]); // useEffect to log when data changes

  return (
    <div className={theme}>
      <div className="App">
        <Header title="My Appicetion" theme={theme} setTheme={setTheme} />
        <main>
          <AddForm data={data} setData={setData} />
          <PersonList data={data} deleteUser={deleteUser} />
        </main>
      </div>
    </div>
  );
}

export default App;
