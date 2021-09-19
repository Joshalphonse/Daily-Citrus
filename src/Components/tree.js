import { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Runner } from "matter-js";

function Tree(props) {
  return (
    <div>
      <img
        src="./assets/tree.png"
        alt="Girl in a jacket"
        width="500"
        height="600"
      />
    </div>
  );
}

export default Tree;
