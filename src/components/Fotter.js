import { useState } from "react";
import Student from "./Student";
import FormAdd from "./FormAdd";
import { v4 as uuidv4 } from 'uuid';
import FormEdit from "./FormEdit";
export default function Fotter(props) {
    const btnList=[
        {
            id: 1,
            name: "Xóa Checked",
            handleClick: () =>props.removeChecked(),
            
        },
        {
            id: 2,
            name: "Lọc tất cả",
            handleClick: () =>props.fillAll(),
        },
        {
            id: 3,
            name: "Lọc Checked",
            handleClick: () =>props.fillChecked(),
        },
        {
            id: 4,
            name: "Lọc NoChecked",
            handleClick: () =>props.fillNoChecked(),
        }
    ]
    return (
        <div className="footer">
             {btnList.map((item, key) =>(
             <button key={key} onClick={item.handleClick} >{item.name}</button>
             ))}
        </div>
    )
}