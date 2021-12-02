import { useEffect } from 'react';
import './App.css';
import dbRef,{userName,connectedRef} from './server/firebase';
import { connect } from "react-redux";
import { setUser,addParticipant,removeParticipant } from './store/actionCreator';

function App(props) {
  const participantsRef = dbRef.child("participants")

  useEffect(() => {
    connectedRef.on("value",(snap)=>{
      if(snap.val()){
        const defaultPref = {
          audio: true,
          video: false,
          screen: false
        }
        const userRef = participantsRef.push({
          userName,
          preference:defaultPref 
        })
        props.setUser({
          [userRef.key]:{
            userName,
            ...defaultPref
          }
        })
        userRef.onDisconnect().remove()
      }
    })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if(props.user){
      console.log(props.user)
      participantsRef.on("child_added",(snap)=>{
        const {userName,preference} = snap.val()
        props.addParticipant({
          [snap.key]:{
            userName,
            ...preference
          }
        })
      })
  
      participantsRef.on("child_removed",(snap)=>{
        props.removeParticipant(snap.key)
      })
    }
     // eslint-disable-next-line
  }, [props.user])

  return (
    <div>
      User: {JSON.stringify(props.user)}<br/>
      Participants: {JSON.stringify(props.participants)}
    </div>
  );
  }

  const mapStateToProps = (state) => {
    return {
      user: state.currentUser,
      participants: state.participants
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      setUser: (user) => dispatch(setUser(user)),
      addParticipant: (participant) => dispatch(addParticipant(participant)),
      removeParticipant: (participantKey) => dispatch(removeParticipant(participantKey)),
    };
  };


  export default connect(mapStateToProps, mapDispatchToProps)(App);
