import "./AddForm.css"

export default function AddForm() {
    return (
        <section className="container">
            <form action="">
                <label htmlFor="">ชื่อประชากร</label>
                <input type="text" />
                <select name="" id="">
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>
                </select>
                <button type="submit" className="btn-save">บันทึก</button>
            </form>
        </section>
    );
}