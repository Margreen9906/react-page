import { useState } from "react";
import "../../style/index.css"
const ToDo = () => {

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    
   const addOrEditToDo = () => {
    if(task.trim() === "") return;

    if(editIndex !== null){
        const updatedToDos = [...todos];
        updatedToDos[editIndex] = task;
        setTodos(updatedToDos);
        setEditIndex(null);
    } else {
        setTodos([...todos, task]);
    }
    setTask("");
   }


    const editToDo = (index) => {
        setTask(todos[index]);
        setEditIndex(index);
    }
    const deleteToDo = (index) => {
        const newToDos = todos.filter((_, i) => i !== index);
        setTodos(newToDos);

   }

   const deleteAll = () => {
    setTodos([]);
   }

    return ( 
        <>
        <div className="todo-container">
         <h2>ToDo Application</h2>
         <hr/>

         
         <div>
            <input type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}/>

            

            <input onClick={addOrEditToDo} type="button" className="add-btn" value={editIndex !== null ? "Edit" : "Add"}/>
         </div>
         
         <hr/>

         <div>
            <input onClick={deleteAll} type="button" className="delete-all" value="Delete All"
            disabled={todos.length === 0}
            />
         </div>
         <div>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}

                    <div className="button-group">
                        <input type="button" className="delete" value="Delete"
                     onClick={() => deleteToDo(index)}/>
                    <input type="button" className="edit" value="Edit"
                     onClick={() => editToDo(index)}/>
                    </div>
                    
                    
                    </li>

                    
                ))}
            </ul>
         </div>
        
        </div>
        </>
        
     );
}

 
export default ToDo;