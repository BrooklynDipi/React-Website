import { useState } from "react";

function ClickButton(){

    // currentValue, setterFunction
    const [numClicks, setNumClicks] = useState(0);

    const onButtonClick = () => {
        setNumClicks(numClicks + 1);
        //Change via setter, not directly via numClicks =+ 1;
    };

    const clicksEmoji = "👆👆👆👆".repeat(numClicks);
    // let text = '';
    // if (numClicks === 0 ) text = "You haven't clicked yet. CLICK ME!";
    // else text = `You've clicked: ${clicksEmoji}`
    const text = numClicks === 0 ? "You haven't clicked yet. CLICK ME!" : `You've clicked: ${clicksEmoji}` ;

    const buttonStlye = {
        width: "5rem", 
        transform: `rotate(${numClicks}deg)`,
        transition: "all 0.2s",
    };

    return <button style= {buttonStlye} onClick={onButtonClick}>{text}</button>;

}

export default ClickButton;