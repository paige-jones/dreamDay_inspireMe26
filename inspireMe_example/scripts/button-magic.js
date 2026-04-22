// Button 1: Color Explosion
// This function makes the button change to random colors!
function colorExplosion() {
    // Get the button element
    const button1 = document.getElementById('button1');

    // Create an array of fun colors
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];

    // Pick a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Change the button's background color
    button1.style.backgroundColor = randomColor;
}

// Button 2: Celebration Alert
// This function shows a fun celebration message!
function celebrationAlert() {
    // Show a fun alert message
    alert("🎉 Welcome to Spellcasting! You're enrolled! ✨");
}

// Button 3: Text Change Magic
// This function changes the button text when clicked!
function textChangeMagic() {
    // Get the button element
    const button3 = document.getElementById('button3');

    // Change the button text
    button3.textContent = "Enrolled! ⚡";

    // Optional: Change the button color too
    button3.style.backgroundColor = '#28a745';
}

// Button 4: Sparkle Magic
// This function creates sparkles that appear and fade away!
function sparkleMagic() {
    // Create 15 sparkles at random positions
    for (let i = 0; i < 15; i++) {
        createSparkle();
    }
}

// Helper function to create a single sparkle
function createSparkle() {
    // Create a new div element for the sparkle
    const sparkle = document.createElement('div');

    // Add sparkle emoji
    sparkle.textContent = '✨';

    // Style the sparkle
    sparkle.style.position = 'fixed';
    sparkle.style.fontSize = '30px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';

    // Random position on the screen
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';

    // Add animation
    sparkle.style.animation = 'sparkleAnimation 1.5s ease-out forwards';

    // Add the sparkle to the page
    document.body.appendChild(sparkle);

    // Remove the sparkle after animation ends
    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}
