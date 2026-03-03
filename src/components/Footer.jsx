import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-100 text-center text-sm mt-8">
      <p>© {new Date().getFullYear()} Shoe Shop. All rights reserved.</p>
    </footer>
  );
}
