import "./welcome-message.css";

function WelcomeMessage(props){
    console.log(props);
  
    const { name, greeting} = props;
    
     return <p className="welcome-message">
       {greeting} {name}! 
       </p>;
  }

  export default WelcomeMessage;