import React from "react";
import home1 from "../img/home1.png";

function Aboutsection() {
  return (
    <>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Work To Make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          contact us for any photography or videography ideas that you have. We
          have professionls with amazing skillsets
        </p>
        <button>Contact US</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with a camera" />
      </div>
    </>
  );
}

export default Aboutsection;
