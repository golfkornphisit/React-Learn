import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

function PersonList() {
  const [data] = useState([
    { id: 1, name: "Korn", gender: "ชาย" },
    { id: 2, name: "Nim", gender: "หญิง" },
    { id: 3, name: "John Doe", gender: "ชาย" },
    { id: 4, name: "Poy", gender: "หญิง" },
  ]);

  const [show, setShow] = useState(true);
  return (
    <>
      <h1>จำนวนประชากร {data.length} คน</h1>
      <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      <u>
        {show &&
          data.map((item) => (
            <li key={item.id}>
              <img src={item.gender=="ชาย" ? boy : girl} width={50} height={50} />             
              <h3>
                {item.name}
              </h3>
            </li>
          ))}
      </u>
    </>
  );
}
export default PersonList;
