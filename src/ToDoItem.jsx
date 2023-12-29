function ToDoItem(props)
{

    const activityarr = props.activityarr
    const setActicityArr = props.setActivityArr

    const handleDelete=(removeid)=>
    {
        var temparr = activityarr.filter(function(item){
            if(item.id === removeid)
            {
                return false
            }
            else{
                return true
            }
        })
        setActicityArr(temparr)
    }
    
    return(
    <div className="flex justify-between">
        <p>{props.index+1}. {props.activity}</p>
        <button className="text-red-500" onClick={()=>handleDelete(props.id)}>Delete</button>
    </div>
    )
}

export default ToDoItem