import { FiDelete } from 'react-icons/fi'
import { BsPencil } from 'react-icons/bs'
import FormEdit from './FormEdit'
import FormAdd from './FormAdd'
export default function Student(props) {
    const { student, deletelist, toggle_complete, toggle_edit, editId, editList } = props
    const isEdit = editId === student.id
    return (
        <div className="student">
            {
                isEdit ? (
                    <FormEdit value={student} editList={editList} />
                ) : (
                    <>
                        <input type='checkbox' checked= {student.isComplete ? true : false} onChange={()=> toggle_complete(student.id)} />
                        <span
                            className={`${student.isComplete ? "complete" : ""}`}
                            
                            onDoubleClick={() => toggle_edit(student.id)}
                        >{student.name}</span>
                        <div className="icon">
                            <BsPencil  onClick={() => toggle_edit(student.id)} />
                            <FiDelete className='delete' onClick={() => { props.deletelist(props.student.id) }} />
                        </div>
                       
                    </>
                )
            }


        </div>
   
        
    )
    
}