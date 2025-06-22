import { useState } from "react";
import "./PersonList.css";
import User from "./User";

function PersonList({data}) {
  const [show, setShow] = useState(true);  
  return (
    <div className="container">
      <div className="header">
        <h2 style={{color:"red", fontSize:"25px"}}>จำนวนประชากร {data.length} คน</h2>
      <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      </div>      
      <ul>
        {show &&
          data.map((item) => (
            <User key={item.id} item={item}/>
          ))}
      </ul>
    </div>
  );
}
export default PersonList;
