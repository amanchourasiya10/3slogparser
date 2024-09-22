import React, { useState, useEffect } from "react";
import ThreeSCall from "./ThreeSCall";
import "./RenderComponent.css";
import UserInput from "./UserInput";

const RenderComponent = ({ tabsArray, objectArray }) => {
  if (!tabsArray || tabsArray.length === 0) {
    return null;
  }
  const [activeTab, setActiveTab] = useState(tabsArray[0]);

  return (
    <div className="lss-container" style={{ height: "100%" }}>
      <div className="lssTabs">
        {tabsArray.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              padding: "10px",
              cursor: "pointer",
              backgroundColor: activeTab === tab ? "#f0f0f0" : "#fff",
              border: "none",
              borderBottom: activeTab === tab ? "2px solid #007bff" : "none",
              outline: "none",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={{ height: "100%" }}>
        {objectArray.map((object, index) => (
          <div
            key={index}
            className="lsstab-content"
            style={{
              display: activeTab === tabsArray[index] ? "block" : "none",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="threescall-container">
              {/* <pre>{JSON.stringify(JSON.parse(object), null, 2)}</pre> */}
              <UserInput requestBody={object} placeholder={"Response Body"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderComponent;
