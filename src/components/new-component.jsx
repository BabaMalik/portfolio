"use client";
import React from "react";

function NewComponent({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#2d2e32] text-white px-6 py-2 rounded-full font-montserrat hover:bg-[#1a1a1a] hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      {label}
    </button>
  );
}

function NewComponentStory() {
  return (
    <div>
      <NewComponent
        onClick={() => scrollToSection("contact")}
        label="Hire Me"
      />
    </div>
  );
}

export default NewComponent;