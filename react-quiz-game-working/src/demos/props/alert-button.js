function AlertButton(props){

    const {alertMessage = "Nothing to see here!", buttonText} = props;

    return(

        

        <button onClick="alert({alertMessage})" > {buttonText} </button>
        // Why is this unable to work, other syntax was incorrect?
    )
}

export default AlertButton;