import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../Styles";

function Aboutsection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We Work To Make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          contact us for any photography or videography ideas that you have. We
          have professionls with amazing skillsets
        </p>
        <button>Contact US</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
}

export default Aboutsection;
