import Header from "./components/Header";
import PersonList from "./components/PersonList";
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <Header title="MY APP"/>
      <main>
        <PersonList />
      </main>
      

    </div>
  );
}

export default App;
