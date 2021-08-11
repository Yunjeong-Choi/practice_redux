import { useSelector } from "react-redux";
import { counterSelector } from "../../store/redux_toolkit/counter";

const Test = () => {
    const number = useSelector(counterSelector);

    return (
        <>
            <h3>Test: {number}</h3>
        </>
    )
}

export default Test