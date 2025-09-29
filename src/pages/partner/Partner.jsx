import React, { useEffect } from "react";
import polytechnique from "../../assets/img/collaboration/UPHF_logo.png";
import upi from "../../assets/img/collaboration/UPI.png";
import polban from "../../assets/img/collaboration/polban.png";
import uin from "../../assets/img/collaboration/UIN bandung.png";
import garut from "../../assets/img/collaboration/UniversitasGarut.png";
import itb from "../../assets/img/collaboration/logo_ITB.png";
import nurtanio from "../../assets/img/collaboration/Universitas-Nurtanio-PNG-600x608.png";
import itenas from "../../assets/img/collaboration/itenas.png";
import telkom from "../../assets/img/collaboration/telkom.png";
import kaust from "../../assets/img/collaboration/kaust_logo.png";

function Partner() {
  useEffect(() => {
    const logoSlide = document.querySelector(
      ".scrolling-logos .logo-container .logo-slide"
    );

    if (logoSlide) {
      const clone = logoSlide.cloneNode(true);
      logoSlide.parentNode.appendChild(clone);
    } else {
      console.error("Element '.logo-slide' not found.");
    }
  }, []);

  return (
    <div className="scrolling-logos">
      <div className="logo-container">
        <div className="logo-slide">
          <img
            src={polytechnique}
            alt="Universite Polytechnique Hauts-de-France"
          />
          <img src={upi} alt="upi" />
          <img src={polban} alt="Polban" />
          <img src={uin} alt="uin" />
          <img src={garut} alt="garut" />
          <img src={itb} alt="itb" />
          <img src={nurtanio} alt="nurtanio" />
          <img src={itenas} alt="itenas" />
          <img src={kaust} alt="kaust" />
          <img src={telkom} alt="Telkom" />
        </div>
      </div>
    </div>
  );
}

export default Partner;
