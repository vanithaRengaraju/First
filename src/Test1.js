

import React,{useState} from 'react'

const Test1 =()=>
{
    const [name,setName]= useState("")
const handler =(event) =>
{
    setName(event.target.value)
}
const submitHandler=(event)=>{
    console.log("form submitted")
    event.preventDefault()
}
    return(<div>
        <form onSubmit={submitHandler}>
        <input type="text" value={name} onChange={handler}/>
        <button>Submit</button>
        </form>
    </div>)
}

export default Test1