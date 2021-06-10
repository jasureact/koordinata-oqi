import React from 'react'
import { useState } from 'react';
const Homework = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const Jaska=(e)=>{
        setX(e.clientX);
        setY(e.clientY);
    }
    return (
        <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexDirection:"column"}}>
            <div style={{marginRight:"30px"}}>
            <p>X-ning qiymati: {x}</p>
            <p>Y-ning qiymati: {y}</p>
            </div>
            <div 
            onClick={Jaska} 
            // onMouseOver={Jaska}
            style={{width: "500px", height:"500px", border:"2px solid red", backgroundColor: "lightgray"}}></div>
        </div>
    )
}

export default Homework
