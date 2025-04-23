function Hero({ heading, subheading }) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">{heading}</h1>
        <p className="mt-4 text-lg text-gray-400">{subheading}</p>
      </div>
    );
  }
  
  export default Hero;
  