// dashboard.js
import firebase from './firebase-config.js';

const dashboardContainer = document.getElementById('dashboard-container');
const dashboardContent = document.getElementById('dashboard-content');
const logoutBtn = document.getElementById('logout-btn');

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        dashboardContent.innerHTML = `<p>Welcome, ${user.displayName}!</p>`;
        logoutBtn.style.display = 'block';
    } else {
        // No user is signed in
        dashboardContent.innerHTML = `<p>Please login first to access the dashboard.</p>`;
        logoutBtn.style.display = 'none';
    }
});

logoutBtn.addEventListener('click', async () => {
    try {
        await firebase.auth().signOut();
        console.log('User signed out successfully');
    } catch (error) {
        console.error('Error signing out:', error);
    }
});
