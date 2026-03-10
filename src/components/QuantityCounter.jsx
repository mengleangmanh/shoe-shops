import React from "react";
import { Minus, Plus } from "lucide-react";

export default function QuantityCounter({
  quantity,
  onQuantityChange,
  min = 1,
  max = 10,
  size = "md",
  showMaxText = true,
}) {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const sizeClasses = {
    sm: {
      button: "w-8 h-8",
      display: "w-12 h-8",
      icon: "w-3 h-3",
      text: "text-xs",
    },
    md: {
      button: "w-10 h-10",
      display: "w-16 h-10",
      icon: "w-4 h-4",
      text: "text-sm",
    },
    lg: {
      button: "w-12 h-12",
      display: "w-20 h-12",
      icon: "w-5 h-5",
      text: "text-base",
    },
  };

  const classes = sizeClasses[size];

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={handleDecrease}
        disabled={quantity <= min}
        className={`${classes.button} border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        aria-label="Decrease quantity"
      >
        <Minus className={classes.icon} />
      </button>

      <div
        className={`${classes.display} border border-gray-300 rounded-lg flex items-center justify-center bg-gray-50`}
      >
        <span className="font-semibold text-gray-900">{quantity}</span>
      </div>

      <button
        onClick={handleIncrease}
        disabled={quantity >= max}
        className={`${classes.button} border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        aria-label="Increase quantity"
      >
        <Plus className={classes.icon} />
      </button>

      {showMaxText && (
        <span className={`${classes.text} text-gray-500 ml-2`}>
          Max: {max} per item
        </span>
      )}
    </div>
  );
}
