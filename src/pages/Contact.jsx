import React from 'react';
import { FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="max-w-screen-lg mx-auto mt-[160px]  px-6 lg:px-0">
      <div className="grid md:grid-cols-2 gap-8 py-16 ">
        {/* Information Section */}
        <div className="space-y-6">
          <FaPhone size={60} className='border-4 p-3 rounded-full'/>
          <h4 className="text-4xl font-rubik font-bold text-gray-800">We're Here To Help You</h4>
          <div className="text-lg text-gray-700">
            <p className="mb-2">
              <strong>Feel free to reach out to us at:</strong><br />
              +234 8061201033 or live chat with us
            </p>
            <p className="mb-2">Monday - Friday: 9am - 10pm EST</p>
            <p className="mb-4">Saturday - Sunday: 10am - 8pm EST</p>
            <p>For further information, please visit:</p>
            <ul className="list-disc pl-5 text-blue-600">
              <li className="underline hover:text-blue-800 transition-colors">Help</li>
              <li className="underline hover:text-blue-800 transition-colors">Shipping and return policy</li>
              <li className="underline hover:text-blue-800 transition-colors">Wholesale</li>
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form action="">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Name</label>
              <input type="text" placeholder="Enter Your Name" className="w-full p-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800" />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
              <input type="email" placeholder="Enter Your Email Address" className="w-full p-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800" />
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-2">Subject</label>
              <input type="text" placeholder="Subject" className="w-full p-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800" />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">Message</label>
              <textarea placeholder="Message" className="w-full p-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800 h-32 resize-none"></textarea>
            </div>
            <button type="submit" className="mt-6 w-full py-3 text-white bg-red-700 rounded-md hover:bg-red-600 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
