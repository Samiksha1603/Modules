// Initialize Firebase
const firebaseConfig=({
    apiKey: "AIzaSyAg_QzL0IVY_DZSxdrxetw3mATuEqI0WEc",
  authDomain: "website-b8c6a.firebaseapp.com",
  projectId: "website-b8c6a",
  storageBucket: "website-b8c6a.appspot.com",
  messagingSenderId: "196591326302",
  appId: "1:196591326302:web:7827a4c47295778a1f50cf"
  });

firebase.initializeApp(firebaseConfig);

// Get the current HTML file name
const currentFileName = window.location.pathname.split('/').pop();
  
  // Get references to the login and signup forms
  // const loginForm = document.getElementById('loginForm');
  // const signupForm = document.getElementById('signupForm');
  
 // Login form submit event
 // Login form submit event
 if (currentFileName === 'login.html') {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  const loginError = document.getElementById('loginError');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailInput.checkValidity() && passwordInput.checkValidity()) {
      const email = emailInput.value.trim();
      const password = passwordInput.value;
  
      // Firebase login with email and password
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // User is logged in
          console.log(userCredential);
          // Redirect to the desired page after login
          window.location.href = 'dashboard.html';
        })
        .catch((error) => {
          // Handle login errors
          loginError.textContent = error.message;
        })
        .finally(() => {
          // Clear input fields after login attempt
          emailInput.value = "";
          passwordInput.value = "";
        });
    }
  });
}
else if(currentFileName === 'signup.html') {
  const signupForm = document.getElementById('signupForm');
  const emailInput = document.getElementById('signupEmail');
  const passwordInput = document.getElementById('signupPassword');
  const signupError = document.getElementById('signupError');

  // Signup form submit event
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
   
    if (emailInput.checkValidity() && passwordInput.checkValidity()) {
      const email = emailInput.value.trim();
      const password = passwordInput.value;
  
      // Firebase signup with email and password
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // User is signed up
          console.log(userCredential);
          // Redirect to the desired page after signup
          window.location.href = 'login.html';
        })
        .catch((error) => {
          // Handle signup errors
          signupError.textContent = error.message;
        })
        .finally(() => {
          // Clear input fields after signup attempt
          emailInput.value = "";
          passwordInput.value = "";
        });
    }
  });
}