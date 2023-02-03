import React from "react";
import Men from "../Images/men.jpg";
import Women from "../Images/women.jpg";
import Accessories from "../Images/accessories.jpg";
function Section() {
  return (
    <>
      <div className="section-1">
        <div className="section-info">
          <div className="img-box" >
            <img src={Men} alt="" />
            <button className="btnn-1 button-position" >MEN</button>
          </div>
          <div className="img-box">
          <img src={Women} alt="" />
          <button className="btnn-2 button-position">Women</button>
          </div>
          <div className="img-box">
          <img src={Accessories} alt="" />
          <button className="btnn-3 button-position">Accessories</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
