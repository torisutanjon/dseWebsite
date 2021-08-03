import React from "react";
import "./mainPageStyle.css";
import mainPageImage from "../Images/mainPagePicture.png";

const MainPage = () => {
  const internshipPageHandler = () => {
    window.location.href = "/internshipPage/agriculture";
  };

  return (
    <div className="mainPage_body">
      <div className="mainPage_topnav">
        <div className="left_div">
          <p className="left_div_p">Lighthouse</p>
        </div>
        <div className="right_nav">
          <div className="right_div home">
            <p className="p_div ">Home</p>
          </div>
          <div className="right_div intership">
            <p
              className="p_div "
              onClick={() => {
                internshipPageHandler();
              }}
            >
              Internships
            </p>
          </div>
          <div className="right_div about">
            <p className="p_div ">About Us</p>
          </div>
          <div className="right_div contact">
            <p className="p_div ">Contact Us</p>
          </div>
        </div>
      </div>
      <div className="mainPage_botnav">
        <div className="mainPage_botnav_left_div">
          <div className="p_container">
            <div className="mbld_p1_div">
              <p className="mbld_p1">Internship</p>
            </div>
            <div className="mbld_p2_div">
              <p className="mbld_p2">BROWSE · APPLY · GAIN EXPERIENCE</p>
            </div>
            <div className="mbld_p3_div">
              <p className="mbld_p3">
                Discover internship offer that suites your career and build up
                valuable experience from companies nearby or even abroad.
              </p>
            </div>
            <button
              className="check_internship_btn"
              type="button"
              onClick={() => {
                internshipPageHandler();
              }}
            >
              Check Interships Now!
            </button>
          </div>
        </div>
        <div className="mainPage_botnav_right_div">
          <img className="mainpage_img" src={mainPageImage} alt="some" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
