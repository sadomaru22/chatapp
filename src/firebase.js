import firebase from 'firebase';


  const firebaseConfig = {
    apiKey: "AIzaSyDhJRTELKDTG7Ji7Ndgz4SFEkrm2m5UhZM",
    authDomain: "sadomaru1-4cdbc.firebaseapp.com",
    projectId: "sadomaru1-4cdbc",
    storageBucket: "sadomaru1-4cdbc.appspot.com",
    messagingSenderId: "481431420344",
    appId: "1:481431420344:web:b8c06c4b6b826d5b17a34d"
  };


  firebase.initializeApp(firebaseConfig);   //初期化
  const database = firebase.database();
  const messagesRef = database.ref('messages');

 export const pushMessage = ({ name, text }) => {
     messagesRef.push({ name, text });
  }
 