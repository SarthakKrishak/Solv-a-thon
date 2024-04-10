// Function to animate elements with GSAP
function animateElements() {
  // Select elements to be animated
  const header = document.querySelector(".header");
  const form = document.querySelector(".form");

  // Animate elements with GSAP
  gsap.from(header, { opacity: 0, y: -50, duration: 1, delay: 0.5 });
  gsap.from(form, { opacity: 0, y: 50, duration: 1, delay: 1 });
}

// Run the animation function when the window is fully loaded
window.onload = function () {
  animateElements();

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBgr8dFNrHGv_PXCjJWf9XOTLWVwjKvYaQ",
    authDomain: "viti-app.firebaseapp.com",
    projectId: "viti-app",
    storageBucket: "viti-app.appspot.com",
    messagingSenderId: "215296459167",
    appId: "1:215296459167:web:4395efc90c1242e325fdaa"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the Firebase auth service
  const auth = firebase.auth();

  // Function to sign in with Google
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => {
        // Redirect to home page
        window.location.href = "./home.html";
      })
      .catch((error) => {
        // Handle errors
        console.error("Error signing in with Google:", error);
      });
  }

  // Event listener for sign-in button
  document
    .getElementById("google-login-btn")
    .addEventListener("click", signInWithGoogle);
};
