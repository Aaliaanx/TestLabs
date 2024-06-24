// signup.js
import firebase from './firebase-config.js';

const signupForm = document.getElementById('signup-form');
const signupResult = document.getElementById('signup-result');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = signupForm.username.value;
    const fullname = signupForm.fullname.value;
    const password = signupForm.password.value;

    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(username, password);
        await userCredential.user.updateProfile({ displayName: fullname });

        signupResult.innerHTML = `<p>Signup successful. Welcome, ${fullname}!</p>`;
        signupForm.reset();
    } catch (error) {
        signupResult.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
