import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Services() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <Navbar />
      <Hero heading="Our Services" subheading="Here's how we help coders grow." />
      <div className="p-8 max-w-4xl mx-auto space-y-6">
        <ul className="list-disc pl-6">
          <li>JavaScript Debugging Assistance</li>
          <li>Code Explanation with Examples</li>
          <li>Beginner-Friendly React Components</li>
          <li>Responsive UI/UX Consultation</li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
