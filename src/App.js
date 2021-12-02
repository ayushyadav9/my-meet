import { useEffect } from 'react';
import './App.css';
import dbRef,{userName,connectedRef} from './server/firebase';

function App() {
  useEffect(() => {
    const participantsRef = dbRef.child("participants")
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
        userRef.onDisconnect().remove()
      }
    })
  }, [])

  return (
    <div>
      {userName}
    </div>
  );
}

export default App;
