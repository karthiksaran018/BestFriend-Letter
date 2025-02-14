document.getElementById("open-letter-btn").addEventListener("click", function() {
    let message = document.querySelector(".hidden-message");
    
    // Remove old animation and restart typing effect
    message.classList.remove("typing");
    void message.offsetWidth; // Trigger reflow
    message.classList.add("typing");

    message.classList.add("show-message");
    this.style.display = "none"; // Hide the button after opening the letter
});
