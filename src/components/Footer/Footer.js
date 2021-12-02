import { faDesktop, faMicrophone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className="meeting-footer">
            <div className="meeting-icons"> 
                <FontAwesomeIcon
                    icon={faMicrophone}
                />
            </div>
            <div className="meeting-icons"> 
                <FontAwesomeIcon
                    icon={faVideo}
                />
            </div>
            <div className="meeting-icons"> 
                <FontAwesomeIcon
                    icon={faDesktop}
                />
            </div>
        </div>
    )
}

export default Footer
