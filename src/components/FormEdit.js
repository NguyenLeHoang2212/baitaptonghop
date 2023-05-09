import { useState } from "react"
export default function FormEdit({editList,value}) {
    const [text,setText]=useState(value.name)
    const handle_edit=(e)=>{
        e.preventDefault()
       editList(value.id,text)
        setText("")
    }
    return (
        <form className="editForm" onSubmit={handle_edit}
          >
            <input className="edit" type="text"
                placeholder="Enter your name"
                value={text} onChange={(e) => { setText(e.target.value) }} />
        </form>
    )


}