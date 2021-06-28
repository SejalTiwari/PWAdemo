
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

const firebaseConfig = {
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

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
