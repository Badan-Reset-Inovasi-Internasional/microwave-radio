import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSatelliteDish,
  faSearch,
  faCamera,
  faHeartbeat,
  faBroadcastTower,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import outcomes from "./../../data/reset.json";

const iconMap = {
  "satellite-dish": faSatelliteDish,
  search: faSearch,
  camera: faCamera,
  heartbeat: faHeartbeat,
  "broadcast-tower": faBroadcastTower,
  industry: faIndustry,
};

function ResearchOutcomes() {
  return (
    <section className="outcomes" id="activities">
      <div className="container">
        <div className="title">
          <h4>Research Outcomes & Applications</h4>
        </div>
        <div className="description">
          <p>Exploring the Real-World Impact of Our Research</p>
        </div>
        <div className="details">
          <p>
            The group’s research outcomes can be applied in various fields such
            as:
          </p>
        </div>
        <div className="grid">
          {outcomes.map((item, idx) => (
            <div key={idx} className="card">
              <FontAwesomeIcon icon={iconMap[item.icon]} className="icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchOutcomes;
