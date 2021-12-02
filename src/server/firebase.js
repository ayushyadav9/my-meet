import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqsp_rsOtdL7X2xN5cIreQXevdgCnxUiY",
  databaseURL: "https://my-meet-4c3ce-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

let dbRef = firebase.database().ref();

export let connectedRef = firebase.database().ref(".info/connected")

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  dbRef = dbRef.child(roomId);
} else {
  dbRef = dbRef.push(userName);
  window.history.replaceState(null, "Meet", "?id=" + dbRef.key);
}

export default dbRef;