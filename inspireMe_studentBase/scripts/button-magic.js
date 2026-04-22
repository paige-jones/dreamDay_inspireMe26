// Button 1: Color Explosion
// This function makes the button change to random colors!
function colorExplosion() {
    // Step 1: Get the button element using its id
    const button1 = document.getElementById('button1');

    // Step 2: Create an array of fun colors to choose from
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];

    // Step 3: Pick a random color from the array
    // Math.random() gives us a random number
    // Math.floor() rounds down to a whole number
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Step 4: Change the button's background color
    // Write your code here:


}

// Button 2: Celebration Alert
// This function shows a fun celebration message!
function celebrationAlert() {
    // Step 1: Show an alert with a fun message
    // Write your code here using alert():


}

// Button 3: Text Change Magic
// This function changes the button text when clicked!
function textChangeMagic() {
    // Step 1: Get the button element using its id
    const button3 = document.getElementById('button3');

    // Step 2: Change the button text to "Enrolled!"
    // Write your code here using .textContent:


    // Step 3 (Optional): Change the button color to green
    // Write your code here using .style.backgroundColor:


}

// Button 4: Sparkle Magic
// This function creates sparkles that appear and fade away!
function sparkleMagic() {
    // Step 1: Create 15 sparkles using a loop
    // A loop repeats code multiple times
    for (let i = 0; i < 15; i++) {
        createSparkle();
    }
}

// Helper function to create a single sparkle
function createSparkle() {
    // Step 1: Create a new div element for the sparkle
    const sparkle = document.createElement('div');

    // Step 2: Add sparkle emoji
    sparkle.textContent = '✨';

    // Step 3: Style the sparkle so it appears on screen
    sparkle.style.position = 'fixed';
    sparkle.style.fontSize = '30px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';

    // Step 4: Put the sparkle at a random position
    // Math.random() gives us a random number
    // window.innerWidth is the width of the screen
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';

    // Step 5: Add animation to make it fade away
    sparkle.style.animation = 'sparkleAnimation 1.5s ease-out forwards';

    // Step 6: Add the sparkle to the page
    // Write your code here using document.body.appendChild():


    // Step 7: Remove the sparkle after 1.5 seconds
    // setTimeout waits before running code
    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}
