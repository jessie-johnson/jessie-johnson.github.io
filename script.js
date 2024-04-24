document.addEventListener("DOMContentLoaded", function () {
    // Fade in the main content after a delay
    setTimeout(function () {
        document.getElementById("main").classList.add("active");
    }, 1000); // Adjust the delay (in milliseconds) as needed

    // Hide the loader after fade-in animation completes
    document.getElementById("main").addEventListener("transitionend", function () {
        document.getElementById("loader").style.display = "none";
    });
});
