"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Have questions or want to partner with us? Reach out and we’ll get back to you promptly.
        </p>

        <form className="flex flex-col gap-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <p className="mt-8 text-gray-500">
          Or email us directly at{" "}
          <a href="mailto:info@streamswift.app" className="text-blue-600 hover:underline">
            info@streamswift.app
          </a>
        </p>
      </div>
    </section>
  );
}