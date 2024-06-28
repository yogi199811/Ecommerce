// src/components/ContactUs.js

import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
        <div className="flex flex-col md:flex-row md:space-x-10 mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, comments, or concerns, please feel free to reach out to us. We're here to help!
            </p>
            <p className="text-gray-700 mb-4">
              You can contact us via email, phone, or by filling out the form on this page. We aim to respond to all inquiries within 24 hours.
            </p>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-700">support@yourecommercesite.com</p>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-700">+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Address</h3>
              <p className="text-gray-700">123 E-commerce St., Business City, Country</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Form</h2>
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea 
                  id="message" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                  rows="4" 
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
