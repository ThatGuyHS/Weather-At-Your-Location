import React from "react";

const Sunny = () => {
  return (
    <div className="flex justify-center items-center w-full h-96 relative overflow-hidden">
      <svg
        className="animate-spin-slow absolute h-32 w-32 text-yellow-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <circle cx="10" cy="10" r="4" />
      </svg>
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            className="animate-ping-slow absolute h-40 w-40 text-yellow-300 opacity-50"
            style={{ transform: `rotate(${i * 45}deg)` }}
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          >
            <line x1="10" y1="2" x2="10" y2="6" />
          </svg>
        ))}
    </div>
  );
};

export default Sunny;
