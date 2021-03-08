import "./social-post.css";

function SocialPost(props){

    const {content, userName, numLikes = 0, numThumbsUp = 0, numSparkles = 0} = props;

    return(

        <div className="social-message">
            <span>{content}</span>
            <span> - {userName}</span>
        </div>
        
    )
}

export default SocialPost;