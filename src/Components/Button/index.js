import {useState} from "react";

const Button = ({ message }) => {

    const [counter, setCounter] = useState(0)

    return (
        <>
            <p>Message {message}</p>
            <button onClick={() => setCounter(counter + 1)}>
                Counter : {counter}
            </button>
        </>
    );
}


export default Button;