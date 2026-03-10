import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Shoe Shop
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Where style meets comfort. We're passionate about bringing you the
            finest footwear for every step of your journey.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2020, Shoe Shop began with a simple vision: to make
                quality footwear accessible to everyone. What started as a small
                online store has grown into a trusted destination for
                fashion-conscious individuals who refuse to compromise on
                comfort.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe that the right pair of shoes can transform not just
                your outfit, but your entire day. That's why we carefully curate
                our collection from premium brands and emerging designers,
                ensuring every pair meets our rigorous standards for quality,
                comfort, and style.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Shoe Shop, we're more than just a retailer – we're acommunity
                of shoe lovers. We strive to provide exceptional customer
                service, personalized recommendations, and a seamless shopping
                experience. Whether you're looking for the latest trends or
                timeless classics, we're here to help you find your perfect
                pair.
              </p>
            </div>
            <div className="bg-gray-200 h-full rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1075747/pexels-photo-1075747.jpeg?cs=srgb&dl=pexels-zaktech90-1075747.jpg&fm=jpg"
                alt="Shoe Shop Store Interior"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality First
              </h3>
              <p className="text-gray-600">
                Every pair of shoes undergoes rigorous quality checks to ensure
                durability, comfort, and style that lasts.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Your happiness is our priority. We offer exceptional customer
                service, easy returns, and personalized recommendations.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We stay ahead of fashion trends and incorporate the latest
                technology to bring you cutting-edge footwear solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Premium Selection
                  </h3>
                  <p className="text-gray-600">
                    Carefully curated collection from top brands and designers.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Free Shipping
                  </h3>
                  <p className="text-gray-600">
                    Free shipping on all orders over $50. Fast and reliable
                    delivery.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    30-Day Returns
                  </h3>
                  <p className="text-gray-600">
                    Not satisfied? Return any item within 30 days for a full
                    refund.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Expert Support
                  </h3>
                  <p className="text-gray-600">
                    Our knowledgeable team is here to help you find the perfect
                    fit.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Secure Payments
                  </h3>
                  <p className="text-gray-600">
                    100% secure checkout with multiple payment options.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Size Guide
                  </h3>
                  <p className="text-gray-600">
                    Detailed size guides and fit recommendations for every
                    style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Step Into Style?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explore our collection and find your perfect pair today.
          </p>
          <a
            href="/shop"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
}
