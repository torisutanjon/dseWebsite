import React, { useState } from "react";
import "./intershipPage.css";
import { internshipInfos } from "../../data/internshipinfos";

const IntershipPage = () => {
  const [selectedfield, setselectedfield] = useState("agriculture");
  const [checked, setCheck] = useState(true);

  const homePageHandler = () => {
    window.location.href = "/";
  };

  const internshipPage = () => {
    window.location.href = "/intershipPage";
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
                    checked={checked}
                    onClick={() => {
                      setCheck(true);
                      setselectedfield("Agriculture");
                    }}
                  />
                  <label for="agriculture">Agriculture</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="architecture"
                    value="architecture"
                    onClick={() => {
                      setCheck(false);
                      setselectedfield("architecture");
                    }}
                  />
                  <label for="architecture">Architecture</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="bam"
                    value="bam"
                    onClick={() => {
                      setCheck(false);
                      setselectedfield("bam");
                    }}
                  />
                  <label for="bam">Business And Marketing</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="cam"
                    value="cam"
                    onClick={() => {
                      setCheck(false);
                      setselectedfield("cam");
                    }}
                  />
                  <label for="cam">Communication and Media</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="education"
                    value="education"
                    onClick={() => {
                      setCheck(false);
                      setselectedfield("education");
                    }}
                  />
                  <label for="education">Education</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="engineering"
                    value="engineering"
                    onClick={() => {
                      setCheck(false);
                      setselectedfield("engineering");
                    }}
                  />
                  <label for="engineering">Engineering</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="fassion"
                    value="fassion"
                    onClick={() => {
                      setCheck(false);
                      setselectedfield("fassion");
                    }}
                  />
                  <label for="fassion">Fassion</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="field"
                    value="finance"
                    onClick={() => {
                      setCheck(false);
                      setselectedfield("finance");
                    }}
                  />
                  <label for="field">Finance</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    value="food"
                    id="food"
                    onClick={() => {
                      setCheck(false);
                      setselectedfield("food");
                    }}
                  />
                  <label for="food">Food Industry</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="itacs"
                    value="itacs"
                    onClick={() => {
                      setCheck(false);
                      setselectedfield("IT and Computer Science");
                    }}
                  />
                  <label for="itacs">IT and Computer Science</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="medicine"
                    value="medicine"
                    onClick={() => {
                      setCheck(false);
                      setselectedfield("medicine");
                    }}
                  />
                  <label for="medicine">Medicine and Health</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="polsci"
                    value="polsci"
                    onClick={() => {
                      setCheck(false);
                      setselectedfield("polsci");
                    }}
                  />
                  <label for="polsci">Political Science</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="toursim"
                    value="tourism"
                    onClick={() => {
                      setCheck(false);
                      setselectedfield("tourism");
                    }}
                  />
                  <label for="tourism">Tourism</label>
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
