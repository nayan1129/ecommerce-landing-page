import React from 'react'
import jeans from "../Images/jeans.jpg";
import shirts from "../Images/shitrs.jpg";
import tshirt from "../Images/t-shirt.jpg";
import jackets from "../Images/jackets.jpg";
import sweartshirt from "../Images/sweartshirt.jpg";
import hoodies from "../Images/hoodies.jpg";

function Content() {
  return (
    <>
     <div className="content">
        <h1>NEW ARRIVALS</h1>
        <div className="line"></div>
        <div className="content-1">
        <div className="content-info">
          <div className="content-img" >
            <img src={jeans} alt="" />
            <button className="btn-1 btn-position">Jeans</button>
          </div>
          <div className="content-img">
          <img src={shirts} alt="" />
          <button className="btn-2 btn-position">Shirts</button>
          </div>
          <div className="content-img">
          <img src={tshirt} alt="" />
          <button className="btn-3 btn-position">T-shirts</button>
          </div>
          <div className="content-img" >
            <img src={jackets} alt="" />
            <button className="btn-4 btn-position">Jackets</button>
          </div>
          <div className="content-img">
          <img src={sweartshirt} alt="" />
          <button className="btn-5 btn-position">Sweartshirts</button>
          </div>
          <div className="content-img">
          <img src={hoodies} alt="" />
          <button className="btn-6 btn-position">Hoodies</button>
          </div>
        </div>
      </div>
        </div> 
    </>
  )
}

export default Content
