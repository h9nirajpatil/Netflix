// Function to redirect after animation
function redirectAfterAnimation() {
    // Redirect to the target page after the animation ends
    window.location.href = "http://127.0.0.1:5501/netflex%20clone/index.html";
}

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Set a timeout to redirect after a specific duration (e.g., 4 seconds)
    setTimeout(redirectAfterAnimation, 5000);
});

