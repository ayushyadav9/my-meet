import React from 'react'
import "./mainscreen.css"
import Footer from "../Footer/Footer"
import Participants from '../Participants/Participants'
import { useSelector } from 'react-redux'

const Screen = () => {

    const participants = useSelector((state) => state.participants)
    return (
        <div className="wrapper">
            {participants && <div className="main-screen"><Participants participants={participants}/></div>}
            <div className="footer"><Footer/></div>   
        </div>
    )
}

export default Screen
