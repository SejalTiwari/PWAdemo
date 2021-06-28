import firebase from 'firebase/app';
import 'firebase/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyA_m71vplsJZvOS7q0CqFsUcqcMsxdWD3Y",
  authDomain: "multi-chat-app-e1e2c.firebaseapp.com",
  projectId: "multi-chat-app-e1e2c",
  storageBucket: "multi-chat-app-e1e2c.appspot.com",
  messagingSenderId: "419298297567",
  appId: "1:419298297567:web:15cfe6da51f9467a6a4b6a",
  measurementId: "G-H4364K2X3W"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging.getToken({vapidKey: 'BNpFE5qjVeWvhaSd5DxI8SS-YOe44MO78ZAN5fZHB4I8VnFHlQq5btArgoBDDUpknVz6ta6eCF93pIKNi_sWEuE'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
   
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
     
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
  
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});