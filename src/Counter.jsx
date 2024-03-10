
// const {name, age} = {name : 'abul', age:24}

import { useState } from "react"

// const [first,second]  = [12,56]


// const [num1 , num2] = function getSomething () {
//     return [25,35]
//   }
//   console.log(num1, num2)


//   const [num3 , num4] = getSomething();


//   function useState (num) {
//     function updateNum(value) {
//         num = value

//     }
//     return [num, updateNum]
//   }


  export default function Counter () {
    
    function handleAdd () {
        const newCount = count + 1
        setCount(newCount);
    }

    function handleReduce () {
        const newCount = count - 1

        if(newCount === -1){
            return
        }

        setCount(newCount);
       
    }


   const [count, setCount] = useState(0)
    return (
        <div style={{border:'2px solid purple' , padding: '50px', borderRadius: '40px'}}>
            <h3>Counter: {count} </h3>
           <button style={{margin:'40px', backgroundColor:'gray', color:'white'}} onClick={handleAdd}>Add</button>

           <button  style={{backgroundColor:'gray', color:'white'}}   onClick={handleReduce}>Reduce</button>
        </div>
    )
  }
