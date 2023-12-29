import { useState } from "react"
import ToDoItem from "../ToDoItem"

function ToDoList(props) {

    const activityarr  = props.activityarr
    const setActivityArr = props.setActivityArr
    return (
            <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
                <h1 className="text-2xl font-medium">Today's Activity</h1>
                {activityarr.length===0?<p>You haven't added anything yet</p>:""}
                {
                    activityarr.map(function(item,index){
                        return(<ToDoItem id={item.id} activity={item.activity} index={index} activityarr={activityarr} setActivityArr={setActivityArr}/>)
                    })
                }
            </div>
    )
}

export default ToDoList