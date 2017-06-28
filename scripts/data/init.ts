import * as Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAwj6Avlly0m6MQ47D-NxK78aLkCWNolH0",
    authDomain: "testword-359a0.firebaseapp.com",
    databaseURL: "https://testword-359a0.firebaseio.com",
    projectId: "testword-359a0",
    storageBucket: "",
    messagingSenderId: "1023827654042"
  };
  
Firebase.initializeApp( config );
