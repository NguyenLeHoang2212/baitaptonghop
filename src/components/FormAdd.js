import { useState } from "react"
export default function FormAdd(props) {
    const [text, setText] = useState("")
    return (
        <form className="formAdd" onSubmit={(e)=>{
            e.preventDefault()
            props.addlist(text)
            setText("")
        }}>
            <input  type="text"
                placeholder="Enter your name"
                value={text} onChange={(e) => { setText(e.target.value) }} />
        </form>
    )
}