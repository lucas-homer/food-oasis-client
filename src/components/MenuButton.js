import React from "react";
import "./MenuButton.css";

export default function MenuButton({ onClick }) {
  return (
    <>
      <button className="menuButton" onClick={() => {}}>
        <svg width="35" height="35" viewBox="0 0 35 35">
          <switch>
            <g>
              <polygon
                color="#696969"
                points="0.450127877 18.1050725 21.5498721 18.1050725 21.5498721 13.9746377 0.450127877 13.9746377"
              ></polygon>
              <polygon
                color="#696969"
                points="0.450127877 5.02536232 21.5498721 5.02536232 21.5498721 0.894927536 0.450127877 0.894927536"
              ></polygon>
              <polygon
                color="#696969"
                points="0.450127877 11.5652174 21.5498721 11.5652174 21.5498721 7.43478261 0.450127877 7.43478261"
              ></polygon>
            </g>
          </switch>
        </svg>
      </button>
    </>
  );
}
