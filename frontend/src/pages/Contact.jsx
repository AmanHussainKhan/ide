import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Contact() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <Navbar />
      <Hero heading="Contact Us" subheading="Let’s build something awesome together." />
      <div className="p-8 max-w-4xl mx-auto">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 bg-[#1f1f1f] border border-gray-600 rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 bg-[#1f1f1f] border border-gray-600 rounded" />
          <textarea rows="5" placeholder="Message" className="w-full p-3 bg-[#1f1f1f] border border-gray-600 rounded"></textarea>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
