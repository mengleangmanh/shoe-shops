// import React from "react";
// import { useCart } from "../context/CartContext";
// import Button from "../components/Button";

// export default function Cart() {
//   const { items, removeItem, clearCart, totalQuantity, updateQuantity } =
//     useCart();

//   // គណនាតម្លៃសរុប
//   const totalPrice = items.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   if (items.length === 0) {
//     return (
//       <div className="p-10 text-center">
//         <h2 className="text-2xl font-bold text-gray-400">
//           Your cart is empty 🛒
//         </h2>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-6 border-b pb-2">
//         Shopping Cart ({totalQuantity})
//       </h2>

//       <ul className="space-y-4">
//         {items.map((i) => (
//           <li
//             key={i.id}
//             className="flex flex-wrap items-center justify-between border-b pb-4 gap-4"
//           >
//             <div className="flex items-center gap-4">
//               {/* បើមានរូបភាព ដាក់ត្រង់នេះ */}
//               <img
//                 src={i.image}
//                 alt={i.name}
//                 className="w-16 h-16 object-cover rounded bg-gray-100"
//               />
//               <div>
//                 <h3 className="font-bold text-lg">{i.name}</h3>
//                 <p className="text-blue-600 font-semibold">${i.price}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-6">
//               {/* ផ្នែក បូក/ដក ចំនួនទំនិញ */}
//               <div className="flex items-center gap-3 border rounded-lg px-2 py-1 bg-white shadow-sm">
//                 <button
//                   className="text-lg font-bold px-2 hover:bg-gray-100 rounded"
//                   onClick={() => updateQuantity(i.id, i.quantity - 1)}
//                 >
//                   -
//                 </button>
//                 <span className="font-bold w-4 text-center">{i.quantity}</span>
//                 <button
//                   className="text-lg font-bold px-2 hover:bg-gray-100 rounded"
//                   onClick={() => updateQuantity(i.id, i.quantity + 1)}
//                 >
//                   +
//                 </button>
//               </div>

//               {/* បង្ហាញតម្លៃសរុបតាមមុខទំនិញ */}
//               <span className="font-bold text-gray-800 w-16 text-right">
//                 ${(i.price * i.quantity).toFixed(2)}
//               </span>

//               <button
//                 className="text-red-500 hover:text-red-700 font-medium"
//                 onClick={() => removeItem(i.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* ផ្នែកសរុបលុយខាងក្រោម */}
//       <div className="mt-8 p-6 bg-gray-50 rounded-xl shadow-inner">
//         <div className="flex justify-between items-center mb-6">
//           <span className="text-gray-600 text-lg">Total Amount:</span>
//           <span className="text-3xl font-extrabold text-green-600">
//             ${totalPrice.toFixed(2)}
//           </span>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4">
//           <Button
//             className="flex-1 bg-white border border-gray-300 text-gray-600 py-3"
//             onClick={clearCart}
//           >
//             Clear All
//           </Button>
//           <a
//             href="src/assets/aba.png" // យក Link នេះចេញពី App ABA របស់អ្នក (ត្រង់ផ្នែក Receive Money / QR Code)
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1"
//           >
//             <Button className="w-full bg-blue-600 text-white py-3 shadow-lg hover:bg-blue-700 flex items-center justify-center gap-2">
//               <span className="font-bold">Pay via ABA Bank</span>
//             </Button>
//           </a>

//           {/* <a
//             href="https://your-bank-payment-link.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1"
//           >
//             <Button className="w-full bg-black text-white py-3 shadow-lg hover:bg-gray-800">
//               Checkout Now
//             </Button>
//           </a> */}

//           {/* <Button className="flex-1 bg-black text-white py-3 shadow-lg hover:bg-gray-800">
//             Checkout Now
//           </Button> */}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-6 pt-20">
        <div className="text-8xl">🛒</div>
        <h2 className="text-4xl font-bold text-gray-700 uppercase tracking-widest">
          Your Cart is Empty
        </h2>
        <p className="text-gray-500">Looks like you haven't added anything yet.</p>
        <Link
          to="/shop"
          className="bg-orange-500 text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-orange-600 transition"
        >
          Start Shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20">
      <div className="max-w-6xl mx-auto px-8 py-12">

        {/* Header */}
        <p className="text-xs tracking-widest text-orange-500 uppercase mb-1">Review</p>
        <h1 className="text-5xl font-black uppercase tracking-wide mb-10">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cart.map(item => (
              <div
                key={item.id}
                className="bg-gray-900 border border-gray-800 p-5 flex items-center gap-5 hover:border-orange-500 transition"
              >
                {/* Emoji/Image */}
                <div className="w-20 h-20 bg-gray-800 flex items-center justify-center text-4xl flex-shrink-0 rounded">
                  {item.emoji || "👟"}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                    {item.category || "Shoes"}
                  </p>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-orange-400 font-semibold">${item.price}</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 bg-gray-800 border border-gray-700 text-white hover:border-orange-500 transition flex items-center justify-center text-lg"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-bold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 bg-gray-800 border border-gray-700 text-white hover:border-orange-500 transition flex items-center justify-center text-lg"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-orange-400 font-bold text-lg w-20 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-600 hover:text-red-500 transition text-xl ml-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-900 border border-gray-800 p-6 h-fit">
            <h3 className="text-xl font-black uppercase tracking-widest mb-6 pb-4 border-b border-gray-800">
              Order Summary
            </h3>

            {/* Items list */}
            <div className="flex flex-col gap-3 mb-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-sm text-gray-400">
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Shipping */}
            <div className="flex justify-between text-sm text-gray-500 py-3 border-t border-gray-800">
              <span>Shipping</span>
              <span className="text-green-400 font-semibold">FREE</span>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center py-4 border-t border-gray-800">
              <span className="text-xl font-black uppercase tracking-widest">Total</span>
              <span className="text-2xl font-black text-orange-500">
                ${total.toFixed(2)}
              </span>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 font-bold uppercase tracking-widest transition mt-4">
              Checkout →
            </button>

            {/* Continue Shopping */}
            <Link
              to="/shop"
              className="block text-center mt-4 text-gray-500 text-sm uppercase tracking-widest hover:text-orange-400 transition"
            >
              ← Continue Shopping
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}