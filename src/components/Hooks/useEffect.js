import React, { useState,useEffect } from 'react'
import "./style.css";

const UseEffect = () => {
    // const initialData = 0
    const [myNum, setMyNum] = useState(0);
    
    useEffect(()=>{
        // console.log("hii");
        // document.title=`Chats(${myNum})`},[]);  for one time to show on screen ``(template litrals)
        document.title=`Chats(${myNum})`});   
    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                {/* updation happen below line */}
                <div className="button2" onClick={() => setMyNum(myNum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INC
                </div>
            </div>
        </>
    )
}

export default UseEffect