import React from "react";
import "./participants.css";
import Participant from "./Participant/Participant";

const Participants = ({ participants }) => {
  const participantKey = Object.keys(participants);

  let gridCol = participantKey.length === 1 ? 1 : participantKey.length <= 4 ? 2 : 4;
  const gridColSize = participantKey.length <= 4 ? 1 : 2;
  let gridRowSize = participantKey.length <= 4? participantKey.length: Math.ceil(participantKey.length / 2);

  return (
    <div className="participants" style={{"--grid-size":gridCol,"--grid-col-size":gridColSize,"--grid-row-size":gridRowSize}}>
      {participantKey.map((partiKey) => {
        const currentParti = participants[partiKey];
        return <Participant key={currentParti} Participant={currentParti} />;
      })}
    </div>
  );
};

export default Participants;
