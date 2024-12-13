// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBL4HhWbrJ_NB-0poSg6KARziNgMeG1o_A",
    authDomain: "madkammeret-b04c3.firebaseapp.com",
    databaseURL: "https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "madkammeret-b04c3",
    storageBucket: "madkammeret-b04c3.firebasestorage.app",
    messagingSenderId: "615563151759",
    appId: "1:615563151759:web:bc7a31a01d442bdb6f63fa"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const auth = getAuth(app);
export { database };

