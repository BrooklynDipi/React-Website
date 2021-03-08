import "./end-screen.css"

function EndStat({label, value})
{
    return(
    <div className="end-screen__stat">
        <div className="end-screen__stat-label">{label}</div>
        <div className="end-screen__stat-value">{value}</div>
    </div>)
}



function EndScreen({score, bestScore, onRetryClick}){
    return (
        <div className="end-screen">
            <h1>Quiz Completed!</h1>
            <div className="end-screen__trophy">🏆🏆🏆🏆</div>
            <EndStat label="Score:" value={score}></EndStat>
            <EndStat label="Best Score:" value={bestScore}></EndStat>
            <button className="end-screen__button" onClick={onRetryClick}>Retry?</button>
        </div>
    );
}

export default EndScreen;