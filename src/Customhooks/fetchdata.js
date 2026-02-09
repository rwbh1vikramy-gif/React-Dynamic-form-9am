export async function Fetchdata(api){
let res= await fetch(api)
// console.log(res)
let result=await res.json();
// console.log(result)
return result;
}