
import "./index.css"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react'

function Single({elem}) {
    const [ans,setAns]=useState(false)
    console.log(elem)
    return(
        <div key={elem.id} className="inner">
        <h3>{elem.title}</h3>
        {ans?<p>{elem.info}</p>:""}
        <button onClick={()=>setAns(!ans)} className="butt">
       {ans?<AiOutlineMinus/>:<AiOutlinePlus/>}   
        </button>
        </div>
    )
  
}

export default Single