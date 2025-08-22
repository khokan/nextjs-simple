"use client";
import { useEffect } from "react";

export default function ThemePersistor() {
  useEffect(() => {
    const stored = localStorage.getItem("theme") || "light";
    document.querySelector("html").setAttribute("data-theme", stored);

    const inputs = document.querySelectorAll(".theme-controller");
    inputs.forEach((input) => {
      input.checked = stored === "dark";
      input.addEventListener("change", (e) => {
        const newTheme = e.target.checked ? "dark" : "light";
        document.querySelector("html").setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
      });
    });
  }, []);

  return null;
}
