import { useState } from "react";
import Confetti from "react-confetti";

function ConfettiDemo(){
    const [ isRunning, setIsRunning ] = useState(false); 

    const [numParticles, setNumParticles] =  useState(200);
    const [numWind, setWind] =  useState(0);
    const [numGravity, setGravity] =  useState(1);

    const toggleConfetti = () => setIsRunning(!isRunning);

    const onParticlesChange = (event) => {
        const newNumParticles = parseInt(event.target.value, 10);
        setNumParticles(newNumParticles);
    };

    const onWindChange = (event) => {
        const newWind = parseInt(event.target.value, 10);
        setWind(newWind);
    };

    const onGravityChange = (event) => {
        const newGravity = parseInt(event.target.value, 10);
        setGravity(newGravity);
    };

    const newColor = ['#00ddff', '#ff00d9'];
    const newStartLocation = {x: window.innerWidth / 2, y: window.innerHeight / 2};

    const buttonText = isRunning ? "Turn Confetti Off" : "Turn Confetti On";

    return <div>

        <div>
            <label htmlFor="num-particles">Num Particles:</label>
            <input type="range" id="num-particles" min="1" max="10000" step="1" value={numParticles} onChange={onParticlesChange}></input>
        </div>

        <div>
            <label htmlFor="wind">Wind:</label>
            <input type="range" id="wind" min="-1" max="1" step=".01" value={numWind} onChange={onWindChange}></input>
        </div>

        <div>
            <label htmlFor="gravity">Gravity:</label>
            <input type="range" id="gravity" min="0" max="1" step=".01" value={numGravity} onChange={onGravityChange}></input>
        </div>

        <div>
        <button onClick={toggleConfetti}>{buttonText}</button>
        </div>

        <Confetti numberOfPieces={numParticles} wind={numWind} confettiSource={newStartLocation} colors={newColor} gravity={numGravity} run={isRunning}></Confetti>
    </div>

}

export default ConfettiDemo;