import react, {useState} from 'react';
import "./style.css";

const UseState = () => {
    const initialData=10;
    const [myNum,setMyNum] =useState(initialData);
    // console.log(myNum);  /*value store in myNum*/
    return (
        <>

            <div className="center_div">
                <p>{myNum}</p>
                {/* updation happen below line */}
                <div className="button2" onClick={()=>setMyNum(myNum+1)}> 
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INC
                </div>
                <div className="button2" onClick={()=>(myNum>0?setMyNum(myNum-1): setMyNum(0))}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                   DEC

                </div>

            </div>
        </>
    );
};

export default UseState