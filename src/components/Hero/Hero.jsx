import React from "react";
import css from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        {/* Upper Elements  */}
        <div className={css.upperElements}>
          <span className="primaryText">
            Hey There, <br /> I'm Nishant.
          </span>
          <span className="secondaryText">
            I design beautiful simple
            <br />
            things, And I love what I do.
          </span>
        </div>
        {/* Person Image  */}
        <div className={css.person}>
          <img src="./person.png" alt="" />
        </div>
        {/* email  */}
        <a className={css.email} href="nishantgangwar0581@gmail.com">
          nishantgangwar0581@gmail.com
        </a>
        {/* Lower Elements  */}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">2</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFESSION</span>
            <span>FULL STACK DEVELOPER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
