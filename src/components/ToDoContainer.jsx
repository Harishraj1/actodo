import AddToDoForm from "./AddToDoForm"
import ToDoList from "./ToDoList"
import { useState } from "react"

function ToDoContainer() {

    const [activityarr,setActivityArr] = useState([
        {
            id:1,
            activity: "Go for a walk"
        },
        {
            id:2,
            activity: "Have a break-fast"
        },
        {
            id:3,
            activity: "Go to College"
        }
    ])

    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddToDoForm activityarr={activityarr} setActivityArr={setActivityArr}/>
                <ToDoList activityarr={activityarr} setActivityArr={setActivityArr}/>
            </div>
        </div>
    )
}

export default ToDoContainer