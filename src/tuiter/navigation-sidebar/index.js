import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHashtag, faAsterisk, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis } from "@fortawesome/free-solid-svg-icons";


const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <li className="list-group-item">Tuiter</li>
            <li className={`list-group-item
                    ${active === 'home' ? 'active' : ''}`} href='/'>
                <FontAwesomeIcon icon={faHome} />
                <span class="d-none d-xl-inline"> Home</span>
            </li>
            <li className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faHashtag} />
                <span class="d-none d-xl-inline"> Explore</span>
            </li>
            <li className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}>
                <FontAwesomeIcon icon={faAsterisk} />
                <span class="d-none d-xl-inline"> Labs</span>
            </li>
            <li className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>

                <FontAwesomeIcon icon={faBell} />
                <span class="d-none d-xl-inline"> Notifications</span>
            </li>
            <li className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>

                <FontAwesomeIcon icon={faEnvelope} />
                <span class="d-none d-xl-inline"> Messages</span>
            </li>
            <li className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>

                <FontAwesomeIcon icon={faBookmark} />
                <span class="d-none d-xl-inline"> Bookmarks</span>
            </li>
            <li className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>

                <FontAwesomeIcon icon={faList} />
                <span class="d-none d-xl-inline"> Lists</span>
            </li>
            <li className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>

                <FontAwesomeIcon icon={faUser} />
                <span class="d-none d-xl-inline"> Profile</span>
            </li>
            <li className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>

                <FontAwesomeIcon icon={faEllipsis} />
                <span class="d-none d-xl-inline"> More</span>
            </li>
        </div>
    );
};
export default NavigationSidebar;