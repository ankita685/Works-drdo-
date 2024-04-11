// import React, { useState } from "react";
import React, { useState,useEffect } from "react";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-scroll";
import FeedbackForm from "../FeedbackForm";
// Import the necessary components from react-router-dom

import { CgMenuGridO } from "react-icons/cg";

const SubMenuBox = () => {
  // This is a placeholder for your submenu content
  return (
    <div className="submenu-box">
       <div className='white-box'>
      <ul className="subMenu">
        <li>
          <Link to="info" smooth={true} duration={300}>
            About
          </Link>
        </li>
        <li>
          <Link to="works" smooth={true} duration={300}>
            Works
          </Link>
        </li>
        <li>
          <Link to="organization" smooth={true} duration={300}>
            Organization
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
};
const Navbar = ({ navigateTo }) => {
  const [active, setActive] = useState("navBarMenu");
  const [aboutMenuVisible, setAboutMenuVisible] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);

  const showFeedback = () => {
    setFeedbackVisible(true);
  };

  const hideFeedback = () => {
    setFeedbackVisible(false);
  };

  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };
  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  // const toggleAboutMenu = () => {
  //   setAboutMenuVisible(!aboutMenuVisible);
  // };

  const toggleAboutMenu = (event) => {
    // Prevent the click event from propagating to the document
    event.stopPropagation();
    setAboutMenuVisible(!aboutMenuVisible);
  };

  const closeAboutMenu = (event) => {
    // Stop the event propagation to prevent immediate closing
    event.stopPropagation();
    
    // Check if the click target is not inside the submenu
    if (!event.target.closest(".submenu-box")) {
      setAboutMenuVisible(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener("click", closeAboutMenu);
  
    return () => {
      document.removeEventListener("click", closeAboutMenu);
    };
  }, []);
  const scrollToForm = () => {
    // Scroll to the 'form' section with smooth animation
    scroll.scrollTo("form", {
      duration: 300,
      smooth: true,
    });
  };

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <img className="logos" src={"/images/drdo_logo_ (1).png"} alt="drdo" />
        </div>

        <div className="atb flex">
        <span onClick={showFeedback}>
  <BsPhoneVibrate className="icon" />
  Feedback
</span>
          <span>
            <AiOutlineGlobal className="icon" />
            Languages
          </span>
        </div>
      </div>

      <div className="navBarTwo">
        <div className="logoDiv">
          <span className="Logo">
            Terminal Ballistic Laboratory Reasearch(TBRL){" "}
          </span>
        </div>

        <div className={active}>
          <ul className='menu flex'>
            <li onClick={() => navigateTo('home')} className='listItem'>
              <Link to='home' smooth={true} duration={300}>
                Home
              </Link>
            </li>

            <li
              onClick={toggleAboutMenu}
              className={`listItem ${aboutMenuVisible ? 'active' : ''}`}
            >
              <span>About</span>
            </li>

            <li onClick={() => navigateTo('complaints')} className='listItem'>
              <Link to='complaints' smooth={true} duration={300}>
                Complaints
              </Link>
            </li>
          </ul>

          <button onClick={() => navigateTo('form')} className='btn flex btnOne'>
            <Link to='form' smooth={true} duration={300}>
              Complaint form
            </Link>
          </button>
        </div>

        <button onClick={() => navigateTo('form')} className='btn flex btnTwo'>
          <Link to='form' smooth={true} duration={300}>
            Complaint form
          </Link>
        </button>

        <div onClick={showNavBar} className='toggleIcon'>
          <CgMenuGridO className='icon' />
        </div>
      </div>

      {aboutMenuVisible && <SubMenuBox />}
      {feedbackVisible && (
        <FeedbackForm handleClose={hideFeedback} />
      )}

     
      </div>
  );
};

export default Navbar;











