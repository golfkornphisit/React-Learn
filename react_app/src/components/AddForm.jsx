import "./AddForm.css"
import { useState } from "react";

export default function AddForm(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("ชาย");

    const {data, setData} = props

    function saveData(e) {
        e.preventDefault();
        const person= {
            id: Math.floor(Math.random()*1000), // Generate a random id
            name:name,
            gender:gender
    }
    console.log(person);
    setData([...data, person]); // Add the new person to the existing data
    setName("");
    setGender("ชาย");
}
    return (
        <section className="container">
            <form onSubmit={saveData}>
                <label htmlFor="">ชื่อประชากร</label>
                <input type="text" value={name}onChange={(e)=>setName(e.target.value)}/>
                <select name="" id="" value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>
                </select>
                <button type="submit" className="btn-save" disabled={name.trim()===""}>บันทึก</button>
            </form>
        </section>
    );
}