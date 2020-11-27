import React, { useState } from "react";
export default function Isopen(){
const[islit,setislit]=useState(true);
const [on, setOn] = useState(true);
let [num,setNum]=useState(0);
    return(
        <>
<div className={on ? 'lighton' : 'lightoff'}>
                <button onClick={() => setOn(true)}>On</button>
                <button onClick={() => setOn(false)}>Off</button>
            </div>
{islit? 'room is lit' : 'room is close'}
<button onClick={()=>setislit(!islit)}>Change Room</button>
<button onClick={()=>setNum(++num)}>Increament</button>
    <button onClick={()=>setNum(--num)}>Decreament</button> 
<p>{num}</p>
        </>
    )

//     }
// export default function Num(){
// let [num,setNum]=useState(0);
// return(
//     <>
//     {/* {num? 'num++' :'num--'} */}
//     <button onClick={()=>setNum(++num)}>Increament</button>
//     <button onClick={()=>setNum(--num)}>Decreament</button> 
// <p>{num}</p>
//     </>
// )
// }
// export default function Isopen() {
//     const [on, setOn] = useState(true);
//     return (
//         <>
//             <div className={on ? 'lighton' : 'lightoff'}>
//                 <button onClick={() => setOn(true)}>On</button>
//                 <button onClick={() => setOn(false)}>Off</button>
//             </div>
//         </>

//     )
}