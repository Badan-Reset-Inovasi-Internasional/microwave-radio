import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo (1).png";

function Navbar({ onSelectCategory }) {
  const [active, setActive] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const section = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    section.forEach((sec) => observer.observe(sec));

    return () => {
      section.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpenDropdown(false);
  };

  const handleMemberSelect = (category) => {
    onSelectCategory(category);
    handleScrollTo("member");
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="List">
          <ul className="list-item">
            <li>
              <button
                onClick={() => handleScrollTo("home")}
                className={active === "home" ? "active" : ""}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("activities")}
                className={active === "activities" ? "active" : ""}
              >
                Activity
              </button>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <button className={active === "member" ? "active" : ""}>
                Member ▾
              </button>
              {openDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <button onClick={() => handleMemberSelect("all")}>
                      All Members
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleMemberSelect("Researcher")}>
                      Researchers
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <button
          onClick={() => handleScrollTo("contact")}
          className="button-contact"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
