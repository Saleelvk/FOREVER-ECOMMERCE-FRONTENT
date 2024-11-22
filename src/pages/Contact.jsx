import React from 'react'

function Contact() {
  return (
    <div>
       <section className="bg-gray-100 py-12 border-t">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
        <p className="text-gray-600 text-center text-lg mb-12">
          We’d love to hear from you! Whether you have questions about our products or need support, feel free to reach out to us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <strong>Email:</strong> <a href="mailto:support@forever.com" className="">support@forever.com</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+1234567890" className="">+1 234 567 890</a>
              </li>
              <li>
                <strong>Address:</strong> 123 Forever Lane, Shopping City, World 45678
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default Contact
