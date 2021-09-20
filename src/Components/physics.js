/**Functional componnet for the matter.js Canvas. 
 The demo shows you how to work with a 2d Physics engine so you can create interactive experiences. 
 This is great for games and other ways to make your side unique

 Change some of the parameters 

 Add a new polygon Using Composites!. Just add a body in the shape you'd like.
**/
import { useEffect, useRef } from "react";
import { Engine, Render, Bodies, Runner, Body, Composite } from "matter-js";

function Comp(props) {
  const scene = useRef();
  const isPressed = useRef(false);
  const engine = useRef(Engine.create());

  useEffect(() => {
    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: 2000,
        wireframes: false,
        hasBounds: true,

        background: "#" + Math.floor(Math.random() * 16777215).toString(16),
      },
    }); // Create your 2d Canvas "World" This world is yours and here are your set of rules that don't change!

    Composite.add(engine.current.world, [
      //What exists in our world? Our shapes of course! Add some to the Array. Think of this like an X & Y Graph you used in math class
      Bodies.rectangle(50, 200, 2000, -20, {
        isStatic: true, // <-- Keep this shape still
        restitution: 100,
        //angle: Math.PI * 0.06,
      }), //top bar the orange sits on,
      Bodies.rectangle(1700, 700, 100, -20, {
        isStatic: true,
        render: {
          fillStyle: "#6DDA4A",
        },
      }),

      Bodies.rectangle(-100, 500, 500, -200, { isStatic: true }),
      Bodies.rectangle(400, 750, 900, -200, {
        isStatic: true,
        angle: Math.PI * 0.06,
      }),

      Bodies.rectangle(1000, 1000, 1200, -100, { isStatic: true }), //bottom bound

      Bodies.polygon(800, 130, 4, 85, {
        isStatic: true,
        fillStyle: "red",
        strokeStyle: "blue",
        lineWidth: 3,
      }),
      Bodies.polygon(250, 200, 8, 95, { isStatic: false }),
      Bodies.rectangle(1000, 400, 100, 500, { isStatic: false }), //change isStatic to true to make the game more difficult 😈

      Bodies.circle(100, -100, 30, {
        render: {
          sprite: {
            texture: "https://art.pixilart.com/a50e87ef6026830.png",
            xScale: 0.08,
            yScale: 0.08,
            friction: 100,
            restitution: 100,
          },
        },
      }),
    ]);

    Runner.run(engine.current);
    Render.run(render); //render world

    return () => {
      Render.stop(render);
      Composite.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  const handleDown = () => {
    isPressed.current = true;
  };

  const handleUp = () => {
    isPressed.current = false;
  };

  // Event handler for our army of little oranges!
  const handleAddOrange = (e) => {
    if (isPressed.current) {
      const ball = Bodies.circle(
        e.clientX,
        e.clientY,
        10,

        {
          render: {
            //Render the orange on the canvas
            sprite: {
              texture: "https://art.pixilart.com/a50e87ef6026830.png",

              //fixed sizes
              xScale: 0.03,
              yScale: 0.03,

              //random size for fun and added
              //   xScale: (Math.random() * (0.03 - 0.02) + 0.02).toFixed(4),
              //   yScale: (Math.random() * (0.03 - 0.02) + 0.02).toFixed(4),
            },
          },
        },

        10 + Math.random() * 5,
        {
          mass: 0,
          restitution: 100,
          friction: 1,
        }
      );
      Composite.add(engine.current.world, [ball]);
    }
  };

  return (
    <div
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddOrange}
    >
      <div ref={scene} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default Comp;
