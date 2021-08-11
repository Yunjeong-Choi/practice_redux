import { useDispatch, useSelector } from "react-redux";
import {
    counterSelector,
    nameSelector,
    decrement,
    increment
} from "../../store/redux_toolkit/counter"
import Test from "./Test";

const Counter = () => {
    const name = useSelector(nameSelector);
    const number = useSelector(counterSelector);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>
                Name: {name}, Count: {number}
            </h2>
            <Test/>
            <div>
                <button onClick={() => dispatch(increment())}>+1</button>
                <button onClick={()=> dispatch(decrement())}>-1</button>
            </div>
        </div>
    )
}

export default Counter