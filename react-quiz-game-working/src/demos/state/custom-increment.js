import { useState } from "react";

function CustomIncrement(){

    const [incrementAmount, setIncrement] = useState(1);
    const [currentValue, setCurrentValue] = useState(1);

    const onIncChange = (event) => {
        console.log(event.target.value);
        const newInc = parseFloat(event.target.value);
        setIncrement(newInc);
    };

    const onCurrentValueChange = (event) => {
        const newCInc = currentValue + incrementAmount;
        setCurrentValue(newCInc);
    };

    const onReset = (event) => {
        const currentValue = 0;
        setCurrentValue(currentValue);
    };

    return(
        <div>

        <div>
            <p>The current value is: {currentValue}</p>
        </div>

        <div> 
            <p>The current increment is: {incrementAmount}</p>
        </div>

        <div>
        <input id="pitch" type="range" min="1" max="500" step="1" value={incrementAmount} onChange={onIncChange}/>
        </div>

        <div>        
            <button onClick={onCurrentValueChange}>Increment +{incrementAmount}</button>
        </div>

        <div>        
            <button onClick={onReset}>Reset</button>
        </div>

        </div>
        

    );

}

export default CustomIncrement;