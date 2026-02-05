
import { Child } from "./Chils"

export function Parents(){

return (

<>
<section className="section">
<header>
<h1>The right Plan for <span style={{color:"#e3aff0"}}>Your business</span></h1>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel distinctio aperiam, debitis tempora architecto ducimus reiciendis necessitatibus pariatur ipsa, vitae voluptas aut sapiente rem laborum maiores nostrum dolores. Animi, ab.</p>
</header>





<div className="box1">

<Child type="starter" plan="Free" />
<Child type="Lorem Plus" plan="32" />
<Child type="Lorem Pro" plan="50" />

</div>


</section>


</>

)


}