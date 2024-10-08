"use client"
import { useState, useEffect } from "react";

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
}