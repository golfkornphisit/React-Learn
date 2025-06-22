import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
import "./PersonList.css";

function PersonList() {
  const [data] = useState([
    { id: 1, name: "Korn", gender: "ชาย" },
    { id: 2, name: "Nim", gender: "หญิง" },
    { id: 3, name: "John Doe", gender: "ชาย" },
    { id: 4, name: "Poy", gender: "หญิง" },
  ]);

  const [show, setShow] = useState(true);
  const myStyle = {
    color: "blue",
    fontSize: "30px",
  }
  return (
    <div className="container">
      <div className="header">
        <h2 style={{color:"red", fontSize:"25px"}}>จำนวนประชากร {data.length} คน</h2>
      <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      </div>      
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id} style={{borderStyle: "solid",borderColor: item.gender=="ชาย" ? "green" : "pink", borderWidth: "1px", padding: "10px", margin: "10px"}}>
              <img src={item.gender=="ชาย" ? boy : girl} width={50} height={50} />             
              <p style={myStyle}>{item.name}</p>
              <div className="control">
                <button>ลบ</button>
              </div>              
            </li>
          ))}
      </ul>
    </div>
  );
}
export default PersonList;
