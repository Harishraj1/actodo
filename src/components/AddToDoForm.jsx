import { useState } from "react"

function AddToDoForm(props) {
    const activityarr = props.activityarr
    const setActivityArr = props.setActivityArr

    const [Newactivity,setNewactivity] = useState("")
    const handleChange=(event)=>
    {
        setNewactivity(event.target.value)
    }

    const addActivity=()=>
    {
        setActivityArr([...activityarr,{id: activityarr.length+1, activity: Newactivity}])
        setNewactivity("")
    }

    return (
        <div>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input  value={Newactivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?"></input>
                    <button onClick={addActivity} className="bg-black text-white p-1 border border-black">Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddToDoForm