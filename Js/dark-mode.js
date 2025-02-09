// Function to toggle dark mode
function toggleDarkMode() {
    const darkModeStyle = document.getElementById("dark-mode-filter");
    const button = document.getElementById("dark-mode-btn");

    if (darkModeStyle) {
        // If dark mode is enabled, disable it
        darkModeStyle.remove();
        button.innerText = "🌙 Invert";
    } else {
        // Enable dark mode with a CSS filter
        const style = document.createElement("style");
        style.id = "dark-mode-filter";
        style.innerHTML = `
            html {
                filter: invert(1) hue-rotate(180deg);
                background-color: #121212 !important;
            }
            img, video, iframe {
                filter: invert(1) hue-rotate(180deg);
            }
        `;
        document.head.appendChild(style);
        button.innerText = "☀️ Revert";
    }
}

// Attach the function to the button
document.addEventListener("DOMContentLoaded", () => {
    const darkModeButton = document.getElementById("dark-mode-btn");
    darkModeButton.addEventListener("click", toggleDarkMode);
});
