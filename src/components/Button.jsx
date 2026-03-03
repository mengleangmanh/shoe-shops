import React from "react";

// simple reusable button component that accepts className and other props
export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
