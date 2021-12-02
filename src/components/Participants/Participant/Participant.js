import React from 'react'
import "./participant.css"
import Card from "../../Utils/Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons'

const Participant = (participant) => {
    return (
        <div className="participant">
            <Card>
                <video className="video" autoPlay playsInline></video>
                <FontAwesomeIcon className="muted" icon={faMicrophoneSlash}/>
                <div style={{background:participant.Participant.avatarColor}} className="avatar">{participant.Participant.userName[0]}</div>
                <div className="name">{participant.Participant.userName}{participant.Participant.currentUser?" (You)":""}</div>
            </Card>
        </div>
    )
}

export default Participant
