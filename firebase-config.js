// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBv-P_GIcmPm-Icmg-3qS1rsJu7PEeV9WM",
    authDomain: "teamanon-6c9c5.firebaseapp.com",
    databaseURL: "https://teamanon-6c9c5-default-rtdb.firebaseio.com",
    projectId: "teamanon-6c9c5",
    storageBucket: "teamanon-6c9c5.appspot.com",
    messagingSenderId: "665722574881",
    appId: "1:665722574881:web:ecebdee116c3a1663e2b60"
};

const app = initializeApp(firebaseConfig);

export default app;
