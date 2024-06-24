// login.js
import firebase from './firebase-config.js';

const loginForm = document.getElementById('login-form');
const loginResult = document.getElementById('login-result');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    try {
        await firebase.auth().signInWithEmailAndPassword(username, password);
        loginResult.innerHTML = `<p>Login successful. Welcome back!</p>`;
        loginForm.reset();
    } catch (error) {
        loginResult.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
