import { useState } from "react";
import Student from "./Student";
import FormAdd from "./FormAdd";
import { v4 as uuidv4 } from 'uuid';
import FormEdit from "./FormEdit";
import Fotter from "./Fotter";
const getList=(stuList,flag)=>{
    if(flag == "fillAll" ){
        return stuList ;
    }
    else if(flag=="fillNoChecked"){
        return stuList.filter((item)=>!item.isComplete);
    }
    else if(flag=="fillChecked"){
        return stuList.filter((item)=>item.isComplete);
    }
    else {
        return stuList
    }
}
export default function StudentList() {
    const [editId,setEditId]=useState("")
    const [flag,setFlag]=useState("filterAll")
    const [list, Setlist] = useState([
        {
            id: 1,
            name: "Nguyễn Lê Hoàng",
            isComplete: false,
            isEdit: false,
        },
        {
            id: 2,
            name: "Nguyễn Hồ Thế Kha",
            isComplete: false,       },
        {
            id: 3,
            name: "Châu Tấn Thành ",
              isComplete: false,        }
    ])
    const addlist = (textname) => {
        Setlist([...list, { id: uuidv4(), name: textname, isComplete: false }])
    }
    const deletelist = (id) => {
        const newlist = list.filter((item) => {
            return item.id != id
        })
        Setlist(newlist)
    }
    const editList=(id,name)=>{
        Setlist(
            list.map((value) =>
                value.id === id ? { ...value, name,isEdit:false } : value
            ))
            setEditId("")
    }
    const toggle_edit = (id) => {
      setEditId(id)
    }
    const toggle_complete = (id) => {
        Setlist(
            list.map((value) =>
                value.id === id ? { ...value, isComplete: !value.isComplete } : value
            ))
    }
    const fillAll = () => {
        setFlag("fillAll")
    }
    const fillNoChecked= () => {
        setFlag("fillNoChecked")
    }
    const fillChecked= () => {
        setFlag("fillChecked")
    }
    const removeChecked= () =>{
        const newlist=list.filter((item)=>!item.isComplete)
        Setlist(newlist)
    }
    return (
        <div className="studentList">
            <FormAdd addlist={addlist} />
            {getList(list,flag).map((value, index) => 
           (
                    <Student
                        student={value}
                        deletelist={deletelist}
                        key={index}
                        toggle_edit={toggle_edit}
                        toggle_complete={toggle_complete}
                        editId={editId}
                        editList={editList}
                    />
                

           )
            )}
            <Fotter 
            fillAll={fillAll}
            fillChecked={fillChecked}
            fillNoChecked={fillNoChecked}
            removeChecked={removeChecked}
            />
        </div>
    )
}