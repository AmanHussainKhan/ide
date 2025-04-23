import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function About() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <Navbar />
      <Hero heading="About Us" subheading="Know more about what drives us!" />
      <div className="p-8 max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed">
          We are passionate developers dedicated to helping people learn JavaScript the right way. Our platform is built for self-learners, by self-learners.
        </p>
      </div>
    </div>
  );
}

export default About;
