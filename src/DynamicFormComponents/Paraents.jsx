import { useState } from "react"
import { Childcomponent } from "./ChildComponent"

export function Paranets(){
    let [flag, setflag]=useState(false)
let obj={
    name:"anas",
    email:"anas@gmail.com",
    number:"8970970909"
}


function changeprofile(){
setflag(!flag)

}


    return (

<>

{flag == true ? (

<section className="Profile">
<Childcomponent name={obj.name} email={obj.email} number={obj.number} setflag={setflag}  flag={flag}/>
</section>


):


<section className="Profile">
<h1>User Profile</h1>

<p>Name:{obj.name}</p>
<p>Email:{obj.email}</p>
<p>Number:{obj.number}</p>


</section>


}


<button onClick={changeprofile}>{flag==false?"update Profile":"cancel"}</button>

</>


    )
}