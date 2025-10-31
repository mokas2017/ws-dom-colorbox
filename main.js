// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
    // Get references to DOM elements
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");
    const title = document.querySelector("h1");

    /**
     * Generates a random hexadecimal color code
     * @returns {string} A color in the format "#RRGGBB"
     */
    function getRandomColor() {
        // Possible hexadecimal digits
        const letters = "0123456789ABCDEF";
        let color = "#";
        // Generate 6 random hex digits for RGB values
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add click event listener to the button
    changeColorBtn.addEventListener("click", function () {
        // Generate a new random color
        const newColor = getRandomColor();
        // Apply the new color to multiple elements
        colorBox.style.backgroundColor = newColor; // Change box background
        title.style.color = newColor;             // Change title text color
        changeColorBtn.style.backgroundColor = newColor; // Change button background
    });
});