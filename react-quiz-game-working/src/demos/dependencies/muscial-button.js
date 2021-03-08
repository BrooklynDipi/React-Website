import * as Tone from 'tone'

function MusicalButton({ children }){

    const playMusic = () => {
        const synth =  new Tone.Synth().toDestination();
        const now = Tone.now();
        synth.triggerAttackRelease("C4", "4n");
        synth.triggerAttackRelease("C4", "4n", now + 1);

    };


    return <button onClick={playMusic}>{children}</button>
}

export default MusicalButton;