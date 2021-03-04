import React from "react";
import { TypeColors, NodeMap } from "../../utils/constants";
import { ARROW_DOWN_ICON } from "../../assets";
import "./DropOutChart.scss";

export default function DropOutChart({ nodeLists, currenBranch }) {
  return (
    <div className="chart-container">
      {nodeLists &&
        nodeLists.length &&
        nodeLists[currenBranch].map((nodeKey, index) => (
          <div className="chart-bar">
            <div key={`${index}_${nodeKey}`} className="bar-container">
              <div
                className="bar"
                style={{
                  height: `${NodeMap[nodeKey].value}%`,
                  backgroundColor: TypeColors[NodeMap[nodeKey].type],
                }}
              >
                <div className="bar-text">{NodeMap[nodeKey].label}</div>
              </div>
              <div className="img-down-container">
                <img
                  className="img-down"
                  src={ARROW_DOWN_ICON}
                  alt="arrow-down"
                />
              </div>
            </div>
            <div className="chart-text">{`${NodeMap[nodeKey].value}%`}</div>
          </div>
        ))}
    </div>
  );
}
