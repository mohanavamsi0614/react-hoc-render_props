import { useState } from "react";
function HOC(Component){
 return function Hoc(){
    const [count,setcount]=useState(0)
    const helper=()=>{
        setcount(count+1)
    }
    return <Component text={count} click={helper}/>
} 
}
export default HOC;