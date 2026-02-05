import { useEffect, useState } from "react"

export function Childcomponent(props){
let [user,setuser]=useState({name:"",email:"", number:""})
console.log(props)

useEffect(()=>{
setuser({...user, ...props})

},[])

function handlechange(e){
    let {name,value}=e.target
setuser({...user, [name]:value})
}
let {setflag,flag}=props
function handlesubmit(e){
e.preventDefault()
console.log(user)

setflag(!flag)
}

    return (

<>
<h1>child component</h1>

<form className="form" onSubmit={handlesubmit}>
<input type="text" name="name" id="name"   value={user.name}  onChange={handlechange}/>
<input type="email" name="email" id="email" value={user.email} onChange={handlechange}/>
<input type="tel" name="number" id="number" value={user.number} onChange={handlechange}/>
<input type="submit" value="Submit" />

</form>

</>

    )
}