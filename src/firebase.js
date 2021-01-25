  import firebase from 'firebase'
  
  const firebaseConfig = {
    apiKey: "AIzaSyC0ethvu9cuGITdITtiK448cQmD_ePUB20",
    authDomain: "perfect-galaxy.firebaseapp.com",
    databaseURL: "https://perfect-galaxy-default-rtdb.firebaseio.com",
    projectId: "perfect-galaxy",
    storageBucket: "perfect-galaxy.appspot.com",
    messagingSenderId: "947304593902",
    appId: "1:947304593902:web:ebe48b7c269d1c3a0ff6ff"
  };

  firebase.initializeApp(firebaseConfig);   //初期化
  const database = firebase.database();
  const messageRef = database.ref('messages');

 export const pushMessage = ({ name, text }) => {
     messageRef.push({ name, text });
  }
 