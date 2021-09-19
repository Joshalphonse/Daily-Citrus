import { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Runner } from "matter-js";
import ReactAudioPlayer from "react-audio-player";
import Sound from "react-sound";

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
        background: "#5D3FD3",
      },
    });

    World.add(engine.current.world, [
      Bodies.rectangle(cw, -100, cw, 20, { isStatic: true }),
      Bodies.circle(700, 50, 17, {
        render: {
          sprite: {
            texture: "https://art.pixilart.com/a50e87ef6026830.png",
            xScale: 0.02,
            yScale: 0.02,
          },
        },
      }),
    ]);

    Runner.run(engine.current);
    Render.run(render);

    return () => {
      Render.stop(render);
      World.clear(engine.current.world);
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

  const handleAddCircle = (e) => {
    if (isPressed.current) {
      const ball = Bodies.circle(
        e.clientX,
        e.clientY,
        35.4,

        {
          render: {
            sprite: {
              texture: "https://art.pixilart.com/a50e87ef6026830.png",
              xScale: 0.3,
              yScale: 0.3,
            },
          },
        },

        10 + Math.random() * 10,
        {
          mass: 10,
          restitution: 100,
          friction: 1,
        }
      );
      World.add(engine.current.world, [ball]);
    }
  };

  return (
    <div
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddCircle}
    >
      <Sound url="././assets/greatest.mp3" playStatus={Sound.status.PLAYING} />
      <div ref={scene} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default Comp;
