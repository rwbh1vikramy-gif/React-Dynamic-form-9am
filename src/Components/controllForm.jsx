
import { useState } from "react"
import "../index.css"


export function ControlForm(){
let [user,setuser]=useState({name:"Enter Your Name",number:"Enter Your Number", email:"Enter Your Email"})

console.log("render form ")
function handlechange(e){
let {name,value}=e.target
    setuser({...user, [name]:value})
}

function handlesubmit(e){
e.preventDefault()
console.log(user)
}

    return (
        <>
     
        <section>
   <h1>control Form Lecture</h1>

<form className="form" onSubmit={handlesubmit}>
<input type="text" name="name" id="name"  value={user.name}  placeholder="enter your name"  onChange={handlechange}/>
<input type="tel" name="number" id="number"  value={user.number}  placeholder="enter your number" onChange={handlechange}/>
<input type="email" name="email" id="email"  value={user.email}placeholder="enter your email" onChange={handlechange}/>
<input type="submit" value="Submit" />
</form>
        </section>
        
        </>
    )
}