import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Korn", gender: "ชาย" },
    { id: 2, name: "Nim", gender: "หญิง" },
    { id: 3, name: "John Doe", gender: "ชาย" },
  ]);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>จำนวนประชากร {data.length} คน</h1>
      <button onClick={()=>setShow(!show)}>{show ? "ซ่อน": "แสดง"}</button>
      <u>
        {show && data.map((item) => (
          <li key={item.id}> <h3>{item.id}| {item.name}| {item.gender}</h3></li>
        ))}
      </u>
    </>
  );
}

export default App;
