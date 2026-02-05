import "../App.css"


export function Child(props){
let {type, plan}=props


    return (
<>

<div className="box">
<h1>{type}</h1>
<ul>
    <li>Lorem ipsum dolor</li>
    <li>Lorem ipsum dolor</li>
    <li>Lorem ipsum dolor</li>
</ul>

<h1>{plan}</h1>
<button style={{backgroundColor: type=="Lorem Plus" ? "#dd9aed" : "#b6f0df", padding:"5px 20px", borderRadius:"10px"}}>Get Started</button>
</div>

</>


    )
}