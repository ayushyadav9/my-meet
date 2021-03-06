import {ADD_PARTICIPANT,SET_USER,REMOVE_PARTICIPANT} from "./actionTypes";

let initialState = {
    participants: {},
    currentUser: null,
  };

export const reducer = (state = initialState,action)=>{
  switch (action.type) {

    case SET_USER:{
      let {payload} = action
      state = { ...state, currentUser: { ...payload.currentUser }}
      return state
    }

    case ADD_PARTICIPANT:{
      let {payload} = action
      console.log(payload)
      const currentUserId = Object.keys(state.currentUser)[0]
      const participantId = Object.keys(payload.participant)[0]
      if(currentUserId===participantId){
        payload.participant[participantId].currentUser = true
      }
      payload.participant[participantId].avatarColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
      let participants = {...state.participants,...payload.participant}
      state = { ...state, participants}
      return state
    }

    case REMOVE_PARTICIPANT:{
      let {payload} = action
      let participants = {...state.participants}
      delete participants[payload.participantKey]
      state = { ...state, participants}
      return state
    }
    default:{
      return state;
    }
  }
}