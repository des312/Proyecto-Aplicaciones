
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyABVY3rel2LCeK1Bl_6cp34EtiIhGCJ7x0",
    authDomain: "proyecto-65b4c.firebaseapp.com",
    projectId: "proyecto-65b4c",
    storageBucket: "proyecto-65b4c.appspot.com",
    messagingSenderId: "604119235859",
    appId: "1:604119235859:web:462a4bcebc01a422fe6ee6"
  };



export const initFirebase=initializeApp(firebaseConfig);