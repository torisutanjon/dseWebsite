import React, { useState, useEffect } from "react";
import "./intershipPage.css";
import { internshipInfos } from "../../data/internshipinfos";
import { useHistory } from "react-router-dom";

const IntershipPage = () => {
  const [selectedfield, setselectedfield] = useState("agriculture");

  const homePageHandler = () => {
    window.location.href = "/";
  };

  const internshipPage = () => {
    window.location.href = `/intershipPage/${selectedfield}`;
  };

  useEffect(() => {
    var radioButtons = [];
    radioButtons = document.getElementsByClassName("radiobtn");
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].id === selectedfield) {
        radioButtons[i].checked = true;
        // console.log(true);
        console.log(radioButtons[i].id);
      } else {
        radioButtons[i].checked = false;
        // console.log(false);
      }
    }

    // console.log(radioButtons);
  }, [selectedfield]);

  let history = useHistory();
  const pushHistoryHandler = (params) => {
    history.push(`/intershipPage/${params}`);
  };

  return (
    <div className="internship_mainbody">
      <div className="internship_topnav">
        <div className="topnav_left_div">
          <p>Lighthouse</p>
        </div>
        <div className="topnav_right_div">
          <div className="topdivs home">
            <p
              onClick={() => {
                homePageHandler();
              }}
            >
              Home
            </p>
          </div>
          <div className="topdivs internships">
            <p
              onClick={() => {
                internshipPage();
              }}
            >
              Internships
            </p>
          </div>
          <div className="topdivs about">
            <p>About Us</p>
          </div>
          <div className="topdivs contact">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="internship_botnav">
        <div className="botnav_leftnav">
          <div className="left_container">
            <div className="search_div">
              <input type="text" name="searchText" placeholder="Keyword" />
              <button type="button">Search</button>
              <div className="just_line"></div>
            </div>
            <div className="field_nav">
              <div className="field_nav_title">
                <p>Fields</p>
              </div>
              <div className="checker_input_container">
                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="agriculture"
                    value="agriculture"
                    onClick={() => {
                      setselectedfield("agriculture");
                      pushHistoryHandler("agriculture");
                    }}
                  />
                  <label htmlFor="agriculture">Agriculture</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="architecture"
                    value="architecture"
                    onClick={() => {
                      setselectedfield("architecture");
                      pushHistoryHandler("architecture");
                    }}
                  />
                  <label htmlFor="architecture">Architecture</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="businessandmarketing"
                    value="bam"
                    onClick={() => {
                      setselectedfield("businessandmarketing");
                      pushHistoryHandler("businessandmarketing");
                    }}
                  />
                  <label htmlFor="bam">Business And Marketing</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="communicationandmedia"
                    value="cam"
                    onClick={() => {
                      setselectedfield("communicationandmedia");
                      pushHistoryHandler("communicationandmedia");
                    }}
                  />
                  <label htmlFor="cam">Communication and Media</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="education"
                    value="education"
                    onClick={() => {
                      setselectedfield("education");
                      pushHistoryHandler("education");
                    }}
                  />
                  <label htmlFor="education">Education</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="engineering"
                    value="engineering"
                    onClick={() => {
                      setselectedfield("engineering");
                      pushHistoryHandler("engineering");
                    }}
                  />
                  <label htmlFor="engineering">Engineering</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="fassion"
                    value="fassion"
                    onClick={() => {
                      setselectedfield("fassion");
                      pushHistoryHandler("fassion");
                    }}
                  />
                  <label htmlFor="fassion">Fassion</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="field"
                    value="finance"
                    onClick={() => {
                      setselectedfield("finance");
                      pushHistoryHandler("finance");
                    }}
                  />
                  <label htmlFor="field">Finance</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    value="food"
                    id="foodindustry"
                    onClick={() => {
                      setselectedfield("foodindustry");
                      pushHistoryHandler("foodindustry");
                    }}
                  />
                  <label htmlFor="food">Food Industry</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="itandcomputerscience"
                    value="itacs"
                    onClick={() => {
                      setselectedfield("itandcomputerscience");
                      pushHistoryHandler("itandcomputerscience");
                    }}
                  />
                  <label htmlFor="itacs">IT and Computer Science</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="medicineandhealth"
                    value="medicine"
                    onClick={() => {
                      setselectedfield("medicineandhealth");
                      pushHistoryHandler("medicineandhealth");
                    }}
                  />
                  <label htmlFor="medicine">Medicine and Health</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="politicalscience"
                    value="polsci"
                    onClick={() => {
                      setselectedfield("politicalscience");
                      pushHistoryHandler("politicalscience");
                    }}
                  />
                  <label htmlFor="polsci">Political Science</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="tourism"
                    value="tourism"
                    onClick={() => {
                      setselectedfield("tourism");
                      pushHistoryHandler("tourism");
                    }}
                  />
                  <label htmlFor="tourism">Tourism</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="botnav_rightnav">
          {internshipInfos.map((internshipinfo, key) => {
            if (internshipinfo.field === selectedfield) {
              return (
                <div className="div_main_body" key={key}>
                  <div className="date_post_div">
                    <p className="posted-p">
                      Posted: <b>{internshipinfo.dateposted}</b>
                    </p>
                  </div>
                  <div className="company_logo_div">
                    <img src={internshipinfo.companylogo} alt="someimage" />
                  </div>
                  <div className="companyName_div">
                    <p>{internshipinfo.companyname}</p>
                  </div>

                  <div className="position_div">
                    <p>{internshipinfo.positionoffered}</p>
                  </div>
                  <div className="desc_div">
                    <p>{internshipinfo.companydescription}</p>
                  </div>
                  <div className="duration_div">
                    <p>{internshipinfo.internshipduration}</p>
                  </div>
                  <div className="apply_button_div">
                    <button type="button">Apply Now</button>
                  </div>
                </div>
              );
            } else {
              return "";
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default IntershipPage;
