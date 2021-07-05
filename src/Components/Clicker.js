import {useState} from "react";

const Clicker =()=>{
    const [number, setNumber] = useState(0);

    const handleOnClick=()=>{
        setNumber(number+10)
    }
    return(
        <>
            <button onClick={handleOnClick}>+10</button>
            <p>{number}</p>
        </>
    )

}
export default Clicker;