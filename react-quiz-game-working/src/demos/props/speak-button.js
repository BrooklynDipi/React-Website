import "./speak-button.css";

function SpeakButton(props){
    const {message, rate, pitch} = props;


    const speak = () => {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.pitch = pitch;
        utterance.rate = rate;
        speechSynthesis.speak(utterance);
    };

    return (
        <button className="speak-button" onClick={speak}>
        Speak "{message}"
        </button>
    );
}

export default SpeakButton;