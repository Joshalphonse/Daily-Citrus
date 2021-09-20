# 🍊 Sample Outline

## Setting the stage

Waking up on Saturday mornings and watching cartoons was one of my favorite pastimes as a kid. The toons are great but paired with a fresh cold glass of orange juice equals an unmatched combo 🍊 .

Daily Citrus is inspired by those mornings where my imagination flowed freely as I entered new worlds from the toons I religiously watched every weekend.

Creating fun, engaging web experiences is my way of tapping into the deepest parts of my imagination. Think of the colored canvas as my saturday morning video game world.

This Demo highlights how to render your own cartoon/2d world of your own! Learn what it takes to create your own interactive experience with Matter.js + React!

This interactive web app only has one objective and thats to get the orange onto the green platform!

We'll learn how to:

-Render different Objects/Bodies
-Control 2d Physics
-Create different interactions upon object collision
-Spice up your site or even make a fun puzzle game!

### Throughout this Demo we will be actively coding a 2d world/level together as a unit!

## State the Problem

Most developers design their websites with CSS or other fancy libraries like SCSS and Tailwind. Those are great ways to add pop to your website but there are even more unique ways that take you outside the box.

Certain design libraries keep developers inside of a box and in order to make your website interactive it takes a lot of code just to make one simple animation or an event on collision of two objects.

## Question

1. How can I create Unique interactive experience with React?

   - Solution: Create a 2D canvas with matter.js and build a puzzle game within your website

   ### Highlight that this is just one example of endless possibilities. Remind the audience that they have creative freedom. Open to project with a canvas thats is already populated

   - Show how to render a body on the canvas with the function **Composite.add**
     - Use the Matter.Build function. Ask the audience for help with creating a new object on the canvas. **where on the X and Y axis should we place the shape? How large do we want the radius to be? How many sides**
       Teach them about the parameters you are manipulating programmatically.
     - Question: Can I make a shape static?
       - show the options property on a shape. add {isStatic: true} to stop the shape's ability to move.

2. Can I add events to create bodies/shapes?

   - Of course! show how to create event handlers that render shapes or manipulate them. about even event handlers from **line 91**!
     - create a **mouseMove** event to produce small oranges when mouse is clicked and dragged.
     - if mouse is pressed render a circle shape. Use the Sprite property

3. Why use react hooks? What is the benefit for useEffect in this case?

   - Discuss the benefits of Hooks and why functional components are great for re-useability
   - Matter.js is a state-full engine.
     - We don't want to exploit the React nature to update the DOM on each update. For that reason, useRef instead useState is used to add statefulness to the component.

4. Is this API only for creating games?
   - Discuss that you can create even cooler interactions. and show some other example sites
