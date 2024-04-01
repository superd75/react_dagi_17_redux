
import { useSelector, useDispatch } from "react-redux";


const Counter = () => { 
    const number = useSelector( state => state.counter.number )
    
    const dispatch = useDispatch();
    const increase = () => {
        dispatch({type:"counter/increase", val:2});
    }
    const decrease = () => {
        //console.log("click_test");
        dispatch({type:"counter/decrease", val:1});
    }

    return(
        <div className="art_area">
            <div className="art_head">
                <h3>Counter</h3>
            </div>
            <div className="art_body">
                <div>{number}</div>
                <div>
                    <button onClick={ increase }>+2</button>
                    <button onClick={ decrease }>-1</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;