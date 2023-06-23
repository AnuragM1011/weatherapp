import react, {useState,useReducer} from 'react';
import "./style.css";

const reducer=(state, action)=>{
    if(action.type==="INCR"){
        state=state+1;
    }
    if(state > 0 && action.type==="DECR"){
        state=state-1;
    }
    return state;
};

const UseReducer= () => {
    // const initialData=10;
    // const [myNum,setMyNum] =useState(initialData);
    // console.log(myNum);  /*value store in myNum*/
    const initialData=10;
    const [state, dispatch]= useReducer(reducer,initialData);
    return (
        <>

            <div className="center_div">
                <p>{state}</p>
                {/* updation happen below line */}
                <div className="button2" onClick={()=>dispatch({type:"INCR"})}> 
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INC
                </div>
                <div className="button2" onClick={()=>dispatch({type:"DECR"})}>
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

export default UseReducer