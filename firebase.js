import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC-aJSWBSkqHrvFlpUqTckyKOyr3uvWOvw",
  authDomain: "authentication-5d1de.firebaseapp.com",
  projectId: "authentication-5d1de",
  storageBucket: "authentication-5d1de.appspot.com",
  messagingSenderId: "1037258671478",
  appId: "1:1037258671478:web:4a2110a1c2d9459617a657",
  measurementId: "G-3WQSVES4G6"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth(app);

export { auth };
export { firebase };