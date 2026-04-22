==========================================
   INSPIRE ME - QUICK REFERENCE GUIDE
==========================================

📁 AVAILABLE THEMES & IMAGES
==========================================

Choose ONE theme for your project:

🏰 DISNEY PRINCESS (images/disney/)
   - Characters: ariel.png, bell.png, jasmine.png, mulan.png,
                 pocahontas.png, rapunzel.png, tiana.png
   - Sidekicks: chip.png, flounder.png, louis.png, lumiere.png,
                maximus.png, meeko.png, mushu.png, pascal.png,
                rajah.png, sebastian.png
   - Other: frogs.png, group_princess.png, background.jpg

⚡ HARRY POTTER (images/harry_potter/)
   - Characters: harry.png, hermione.png, dobby.png
   - Creatures: dragon.png, falcon.png, fluffy.png,
                hippogriff.png, owl.png
   - Items: logo.png, moon.png, potion.png, quidditch.png,
            sorting_hat.png, wand.png
   - Other: background.png

🍄 SUPER MARIO (images/mario/)
   - Heroes: mario.png, luigi.png, peach.png, toad.png,
             toadette.png, yoshi.png
   - Villains: bowser.png, gooma.png, koopa.png, cloud_koopa.png
   - Items: bomb.png, brick.png, plant.png, game.png
   - Other: super_mario_brothers.png, background.jpg

🎨 COLOR CODES
==========================================
Use these in your CSS (styles.css):

Hex Colors (use with #):
  #FF0000 - Red            #800080 - Purple
  #00FF00 - Green          #FFC0CB - Pink
  #0000FF - Blue           #A52A2A - Brown
  #FFFF00 - Yellow         #000000 - Black
  #FFA500 - Orange         #FFFFFF - White
  #808080 - Gray           #FFD700 - Gold

Color Names (type as-is):
  red, blue, green, yellow, orange, purple, pink,
  black, white, gray, lightblue, darkgreen, etc.

✨ ANIMATION CLASSES
==========================================
Add these to your image tags:

  floating     - Gentle up and down motion
  upAndDown    - Wobbly vertical movement
  leftAndRight - Swaying side to side
  smallCircle  - Small circular motion

Example: <img src="images/disney/ariel.png" class="img-fluid floating">

🔧 COMMON FIXES
==========================================

❌ Image not showing?
   ✓ Check spelling of image name
   ✓ Make sure you included the theme folder (disney/, harry_potter/, or mario/)
   ✓ Example: src="images/harry_potter/wand.png"

❌ Color not working?
   ✓ Use color: for text color
   ✓ Use background-color: for backgrounds
   ✓ Don't forget the semicolon at the end!
   ✓ Example: color: #FF0000;

❌ Animation not working?
   ✓ Check spelling of class name
   ✓ Make sure it's inside the class="" quotes
   ✓ Animation classes go on the <img> tag

📝 WHERE TO EDIT
==========================================

index.html - Add your text, images, and content
styles.css - Change colors, fonts, and card styles
animations/animation-styles.css - DON'T EDIT (animations are already set up)

💡 PRO TIPS
==========================================

1. Save your files often! (Ctrl+S or Cmd+S)
2. Refresh your browser to see changes
3. Pick your theme first, then stick with it
4. Look at the example folder (inspireMe_example) if you get stuck
5. Comments in the code (<!-- like this -->) tell you what to do
6. Read the comments carefully - they're your guide!

🎯 STEP-BY-STEP CHECKLIST
==========================================

□ Pick your theme (disney, harry_potter, or mario)
□ Choose and add your background image in styles.css
□ Name your webpage title (line 13 in index.html)
□ Add a tab icon image (line 16 in index.html)
□ Add navbar image (line 28 in index.html)
□ Name your nav items (lines 36, 42, 46 in index.html)
□ Add hero image for section 1 (line 62 in index.html)
□ Write your main title and subtitle (lines 70, 75 in index.html)
□ Complete Card 1 (lines 91-103 in index.html)
□ Complete Card 2 (lines 111-123 in index.html)
□ Create Card 3 from scratch (lines 134-138 in index.html)
□ Get creative in Section 3! (line 147+ in index.html)
□ Style your cards and fonts in styles.css

🎨 STYLING TIPS
==========================================

In styles.css, you can change:
  - Background image (line 11)
  - Font families (lines 33, 38)
  - Font sizes and colors (lines 42-52)
  - Card background color (line 66)
  - Card text color (line 69)
  - Card title color (line 80)
  - Button colors (lines 85, 91)

📚 HTML STRUCTURE REMINDER
==========================================

Cards need these parts:
  <div class="card">
    <img src="images/THEME/NAME.png" class="card-image-top ANIMATION">
    <div class="card-body">
      <h5 class="card-title">Your Title</h5>
      <p class="card-text">Your description here</p>
      <a href="#" class="btn btn-primary">Button Text</a>
    </div>
  </div>

==========================================
Need help? Ask your instructor!
Have fun and be creative! 🎉
==========================================
