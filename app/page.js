// /pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>Phish Fall | Don't Fall for It</title>
        <meta name="description" content="Phishing Simulator App - Phish Fall" />
      </Head>

      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <div className="text-2xl font-bold tracking-wide">Phish Fall</div>
        
        <nav className="space-x-6">
          <a href="#platform" className="hover:text-gray-300">Platform</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
        <button className="bg-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600">
          Register Now
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-20 px-6 bg-gradient-to-br from-blue-600 via-gray-800 to-black">
        <div className="absolute inset-0 bg-pattern opacity-20"></div> {/* Add a custom pattern here */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Cyber Awareness Training</h1>
        <p className="text-xl md:text-2xl font-light mb-8">
          Don't Fall for It. Protect Yourself Against Phishing Attacks.
        </p>
        <div className="space-x-4">
          <button className="mt-4 bg-blue-800 text-white py-3 px-6 rounded transform transition-transform duration-300 hover:scale-105 hover:bg-blue-600">
            Learn More
          </button>
          <button className="border border-white px-6 py-3 rounded-lg rounded transform transition-transform duration-300 hover:scale-105 hover:bg-white-600">
            Get Started
          </button>
        </div>
      </section>

      {/* New Section */}
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Start Protecting Yourself Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get started with Phish Fall and ensure your team is aware of phishing threats. Our simulator is designed to help you recognize and prevent phishing attacks.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Highlights and Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">76%</h3>
            <p className="text-gray-400">of businesses reported phishing attacks in 2023.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">3.4 billion</h3>
            <p className="text-gray-400">phishing emails are sent daily worldwide.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Phishing is a primary attack method: </h3>
            <p className="text-gray-400">91% of cyber attacks start with a phishing email.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">48.63%</h3>
            <p className="text-gray-400"> of all emails globally were spam in 2022</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">CSO Online reports  </h3>
            <p className="text-gray-400">phishing attacks cost $17,700 per minute.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">74%</h3>
            <p className="text-gray-400">of successful phishing attacks are due to human error. </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800">
        <p className="text-sm text-gray-500">
          &copy; 2024 Phish Fall. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
