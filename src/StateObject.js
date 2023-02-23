import { useState } from "react"


export default function StateObject() {

    const [details, setDetails] = useState({
        name:"",age:0,gender:"",isIndian:true
    })
    console.log(details)
    return (
        <div className="my-2">
            <button className="btn btn-secondary btn-sm" 
                onClick={()=>setDetails({...details,name:"suchit"})}
            >set name</button>
            <button className="btn btn-secondary btn-sm mx-2" 
                onClick={()=>setDetails((prev)=>({...details,age:prev.age+1}))}
            >set age</button>
            <button className="btn btn-secondary btn-sm" 
                onClick={()=>setDetails({...details,gender:"male"})}
            >set gender</button>
            <button className="btn btn-secondary btn-sm mx-2" 
                onClick={()=>setDetails((prev)=>({...details,isIndian:!prev.isIndian}))}
            >set nationality</button>
        </div>
    )
}