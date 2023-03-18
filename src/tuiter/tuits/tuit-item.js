import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats"
import { deleteTuit } from "./tuits-reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const TuitItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "https://www.logodesignlove.com/images/monograms/tesla-symbol.jpg"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item">
            <div className="row mb-2">
                <div className="col-2">
                    <img width={70} className="rounded-circle p-1" src={`${post.image}`} />
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(post._id)}></i>
                    <span className="fw-bold">{post.userName} </span>
                    <FontAwesomeIcon className="ms-1 me-1" icon={faCheckCircle}
                        style={{ color: "blue" }} />
                    <span className="ms-1 text-secondary">{post.handle}</span>
                    <span className="text-secondary"> - {post.time}</span>
                    <div>
                        {post.tuit}
                    </div>
                </div>
            </div>
            <TuitStats post={post} />
        </li>
    );
};
export default TuitItem;