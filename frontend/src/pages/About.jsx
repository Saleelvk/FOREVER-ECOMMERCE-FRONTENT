import React from 'react'

function About() {
  return (
    <div>
       <section className="bg-gray-100 py-12  border-t ">
      <div className="container mx-auto px-6 lg:px-20 ">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">About Us</h2>
        <p className="text-gray-600 text-center text-lg mb-12">
          Welcome to <span className="text-pink-400 font-semibold">Forever</span>! We are your trusted e-commerce platform, offering top-quality products at unbeatable prices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To inspire happiness and confidence by delivering products that add joy to everyday life, making shopping effortless and delightful.
            </p>
          </div>

          {/* Our Story */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600">
              Founded with a passion for excellence, <span className="text-pink-400  font-medium">Forever</span> started as a simple idea: to create a platform where customers can find the best products, tailored to their needs.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">What We Offer</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>A wide range of categories from fashion to electronics.</li>
              <li>Top-quality products from trusted brands.</li>
              <li>Unbeatable prices and frequent deals.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Forever?</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Seamless shopping with a user-friendly platform.</li>
              <li>Fast delivery right to your doorstep.</li>
              <li>Dedicated customer support team.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Your satisfaction is our priority. Shop with us and experience the best of e-commerce with <span className="text-pink-400  font-semibold">Forever</span>.
          </p>
        </div>
      </div>
    </section>

      
    </div>
  )
}

export default About
