import { useState } from "react";
const Countrer = () => {
    const [count, setCount] = useState(0);

    const increease = () => {
        if (count < 100) {
        setCount(count + 1);
     }
  }

    const decrease = () => {
        if (count > 0){
           setCount(count - 1);
        }
       
    }
    return ( 
        <>
        <h1>Counter Componenet</h1>
        <h2>Count: {count}</h2>
        <hr/>
        <input onClick={increease} type="button" value="+"/>
        <input onClick={decrease} type="button" value="-"/>
        </>
     );
}
 
export default Countrer;