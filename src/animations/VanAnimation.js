import { useState, useEffect } from "react";
import van from "../assets/design/van.png";

export default function VanAnimation() {
  const [position, setPosition] = useState(window.innerWidth);

  useEffect(() => {
    let animationFrameId;

    const moveVan = () => {
      setPosition((prev) => {
        return prev - 5;
      });

      animationFrameId = requestAnimationFrame(moveVan);
    };

    animationFrameId = requestAnimationFrame(moveVan);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <img
      src={van}
      className="van"
      alt="Van"
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: "500px",
        left: position + "px",
      }}
    />
  );
}
