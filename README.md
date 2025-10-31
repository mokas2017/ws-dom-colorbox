🎨 Checkpoint : Changeur de couleurs interactif

(Interactive Color Changer Project)

🧩 Description du projet / Project Overview

Ce projet consiste à créer une petite application web interactive permettant de changer dynamiquement la couleur d’une boîte lorsqu’on clique sur un bouton.
This project is a simple interactive web app that changes the color of a box each time a button is clicked.

L’application est composée de trois fichiers principaux :

index.html → structure de la page (HTML structure)

style.css → styles et mise en forme (styling)

script.js → logique et interactivité (JavaScript functionality)

🧱 Structure du projet / Project Structure
ws-js-color-changer/
│
├── index.html       # Structure HTML de la page
├── style.css        # Feuille de style CSS
└── script.js        # Logique JavaScript

⚙️ Fonctionnalités / Features
🇫🇷 En français :

Affiche une boîte colorée et un bouton « Change Color ».

À chaque clic sur le bouton, la couleur de la boîte change de manière aléatoire.

La fonction getRandomColor() génère un code de couleur hexadécimal.

L’interactivité est gérée grâce à l’événement click en JavaScript.

🇬🇧 In English:

Displays a colored box and a “Change Color” button.

Each button click changes the box color randomly.

The getRandomColor() function generates a random hexadecimal color code.

Interactivity is handled using a JavaScript click event listener.

🧠 Instructions de développement / Development Steps
1️⃣ Configuration HTML

Create index.html and include:

A <div class="container"> to hold the content.

Inside it, an <h1> with “Color Changer”.

A <div id="color-box"></div> for the color square.

A <button id="change-color-btn">Change Color</button> for interaction.

2️⃣ CSS Styling

Create style.css and link it in your <head> with <link rel="stylesheet" href="style.css">.

Center the container and add spacing (margin-top: 50px).

Style the #color-box with fixed dimensions and a default background color.

Style the button with padding, colors, and hover effects.

3️⃣ JavaScript Interactivity

Create script.js and include it before the closing </body> tag with <script src="script.js"></script>.

Wait for the DOM to load using DOMContentLoaded.

Select color-box and change-color-btn using document.getElementById().

Implement:

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


Add a click event listener to change the background color dynamically.

🧪 Test / Testing
🇫🇷 Étapes :

Ouvrez index.html dans votre navigateur.

Cliquez sur le bouton “Change Color”.

Observez la couleur de la boîte changer à chaque clic.

🇬🇧 Steps:

Open index.html in your browser.

Click on the “Change Color” button.

Watch the box change colors dynamically.

💡 Exemple de capture / Example Screenshot

(optional – you can add an image here)

![Demo Screenshot](screenshot.png)

🧰 Technologies utilisées / Technologies Used

HTML5 – Structure of the web page

CSS3 – Styling and responsive design

JavaScript (ES6) – Interactivity and random color generation

🚀 Commandes Git / Git Commands
# Clone the repository
git clone https://github.com/mokas2017/ws-dom-colorbox.git

# Navigate into the project folder
cd ws-dom-colorbox

# Open with VS Code
code .

👨‍💻 Auteur / Author

Med Karim Slouma
GitHub → https://github.com/mokas2017
