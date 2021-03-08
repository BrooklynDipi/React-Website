import WelcomeMessage from "./props/welcome-message";
import SpeakButton from "./props/speak-button";
import ChatMessage from "./props/chat-message";
import AlertButton from "./props/alert-button";
import SocialPost from "./props/social-post";
import ClickButton from "./state/click-button";
import SpeakForm from "./state/speak-form";
import CustomIncrement from "./state/custom-increment";
import MusicalButton from "./dependencies/muscial-button";
import ConfettiDemo from "./dependencies/confetti-demo";

function DemosPage(){
    return (
        <main>

        <h1>Confetti, Bitch.</h1>
        <ConfettiDemo></ConfettiDemo>

        <h1>Lets Play Some Music!</h1>
        <MusicalButton>Music!</MusicalButton>

        <h1>Custom Increment</h1>
        <CustomIncrement></CustomIncrement>

        <h1>Speak Form</h1>
        <SpeakForm></SpeakForm>

        <h1>Stateful Buttons</h1>

        <ClickButton></ClickButton>


        <WelcomeMessage name="Horse" greeting="Hello you "/>
        <h1>Hi 🌈🌈🌈🌈</h1>
        <p>Our first!</p>
        
        <SpeakButton message="Hello" rate={5} pitch={1}></SpeakButton>

        <h1>Chat</h1>

        <ChatMessage message="Ho HO HO SANTA" userName="Santa" date="Hell"></ChatMessage>
      
        <h2>Social Media</h2>

        <AlertButton buttonText="Presents?" alertMessage="NO!"></AlertButton>
        <AlertButton buttonText="Christmas?" alertMessage="Maybe?"></AlertButton>

        <SocialPost content="Delete this." userName="Baddie"></SocialPost>
        <SocialPost content="NO!" userName="Santa"></SocialPost>

        </main>

    );


}

export default DemosPage;