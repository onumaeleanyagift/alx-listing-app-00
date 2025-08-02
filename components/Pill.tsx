// components/Pill.tsx
import React from "react";
import { PillProps } from "../interfaces";


const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
        isActive ? "bg-black text-white" : "bg-white text-black border-gray-300"
      } hover:bg-black hover:text-white`}
    >
      {label}
    </button>
  );
};

export default Pill;
