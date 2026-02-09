import { useEffect, useState } from "react"
import { Fetchdata } from "./fetchdata"

export function Datashow(){
let [data,setdata]=useState([])


useEffect(()=>{

async function ds() {
let ds =await Fetchdata("https://fakestoreapi.com/products")
setdata(ds)
}
ds()
},[])


console.log("data in useffect",data)

    return (

<>

<section>
<h1>This is custom hook lecture</h1>
{data.map((v)=>(
    <div>
<p>{v.title}</p>
    </div>
))}


</section>


</>

    )
}