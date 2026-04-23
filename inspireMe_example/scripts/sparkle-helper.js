// Helper function to create a single sparkle
// This code is provided for you - you don't need to edit it!
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
