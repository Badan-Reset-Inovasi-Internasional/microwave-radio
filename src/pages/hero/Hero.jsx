import React from "react";

function Hero() {
  const handleScrollToMember = () => {
    const element = document.getElementById("member");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <h1>
            Microwave Radio Frequency, Acoustics, and Photonics Research Group
          </h1>
        </div>
        <div className="hero-button">
          <p>
            We explore the frontiers of microwave radio frequency, acoustics,
            and photonics to design and optimize innovative communication and
            sensing technologies. By combining expertise across these
            disciplines, our research group develops advanced solutions that
            enable faster, smarter, and more reliable systems for the future of
            science and society.
          </p>
          <button onClick={handleScrollToMember} className="btn">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
