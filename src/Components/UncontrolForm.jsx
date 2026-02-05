import { useRef } from "react"
import "../index.css"


export function UncontrolForm(){

let nameref=useRef()
let numberref=useRef()
let emailref=useRef()
console.log("render form ")

function handlesubmit(e){
e.preventDefault()
console.log(nameref.current,numberref.current, emailref.current)
}


    return (
        <>
     
        <section>
   <h1>Uncontrol Form Lecture</h1>


<form className="form" onSubmit={handlesubmit}>
<input type="text" name="name" id="name"  ref={nameref}  placeholder="enter your name"/>
<input type="tel" name="number" id="number" ref={numberref}  placeholder="enter your number"/>
<input type="email" name="email" id="email" ref={emailref} placeholder="enter your email"/>
<input type="submit" value="Submit" />
</form>
        </section>
        
        </>
    )
}