import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
const Header = () => {
  const headerShadow = useHeaderShadow();
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Nishant</div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>{" "}
          <li>
            <a href="">Portfolio</a>
          </li>{" "}
          <li>
            <a href="">Testimonials</a>
          </li>{" "}
          <li className={`flexCenter ${css.phone}`}>
            <p>+916397387104</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        {/* This is only for medium and small screen  */}
        <div
          className={`${css.menuIcon}`}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
