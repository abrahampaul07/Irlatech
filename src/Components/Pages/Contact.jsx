// src/components/Contact.jsx
import React from "react";
import Layout from "./Layout";
import Footer from "./Footer";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <>
      <Layout>
        <div className="flex items-center justify-center min-h-screen p-4 ">
          {" "}
          {/* Add pt-20 to create space below the navbar */}
          <div
            className="max-w-xl w-full bg-white bg-opacity-60 rounded-lg p-6 shadow-lg"
            style={{ backgroundColor: "rgba(38, 38, 38, 0.4)" }}
          >
            <h1 className="text-[32px] md:text-[40px] font-bold text-center text-white">
              Contact Us
            </h1>
            <span className="block h-1 w-20 bg-emerald-800 mx-auto mt-2 mb-6" />
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border-gray-300 shadow-sm p-2 focus:ring focus:ring-gray-950 text-sm"
                  style={{ backgroundColor: "rgba(38, 38, 38, 0.6)" }}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-gray-300 text-sm"
                  style={{ backgroundColor: "rgba(38, 38, 38, 0.6)" }}
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-gray-300 text-sm"
                  style={{ backgroundColor: "rgba(38, 38, 38, 0.6)" }}
                  placeholder="Your Message"
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-[#11724c] transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Contact;
