import "./AddForm.css"
import { useState } from "react";

export default function AddForm() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    return (
        <section className="container">
            <form action="">
                <label htmlFor="">ชื่อประชากร</label>
                <input type="text" value={name}onChange={(e)=>setName(e.target.value)}/>
                <select name="" id="" value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>
                </select>
                <button type="submit" className="btn-save">บันทึก</button>
            </form>
        </section>
    );
}