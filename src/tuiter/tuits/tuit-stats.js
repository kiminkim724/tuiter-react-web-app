import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faRetweet, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
const TuitStats = ({ post }) => {
    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col">
                <FontAwesomeIcon className="me-2" icon={faComment} />
                <span class="text-secondary">{post.replies} </span>
            </div>
            <div className="col">
                <FontAwesomeIcon className="me-2" icon={faRetweet} />
                <span class="text-secondary">{post.retuits} </span>
            </div>
            <div className="col">
                <FontAwesomeIcon className="me-2" icon={faHeart}
                style={{ color: post.liked ? 'red' : 'black' }} />
                <span class="text-secondary">{post.likes} </span>
            </div>
            <div className="col">
                <FontAwesomeIcon className="me-2" icon={faShare} />
            </div>
        </div>
    );
};
export default TuitStats;