import React from "react";

const Rainy = () => {
  return (
    <div className="flex justify-center items-center w-full h-64 relative overflow-hidden">
      <svg
        className="animate-drop absolute h-6 w-6 text-blue-400"
        style={{ top: "-2rem", left: "10%", animationDuration: "3s" }}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm-1-18h2v6H9V2zm0 8h2v6H9v-6z" />
      </svg>
      <svg
        className="animate-drop absolute h-6 w-6 text-blue-400"
        style={{ top: "-2rem", left: "40%", animationDuration: "2.7s" }}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm-1-18h2v6H9V2zm0 8h2v6H9v-6z" />
      </svg>
      <svg
        className="animate-drop absolute h-6 w-6 text-blue-400"
        style={{ top: "-2rem", left: "70%", animationDuration: "2.6s" }}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm-1-18h2v6H9V2zm0 8h2v6H9v-6z" />
      </svg>
    </div>
  );
};

export default Rainy;
