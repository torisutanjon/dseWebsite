import React, { useState, useEffect } from "react";
import "./intershipPage.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import InternshipDiv from "./internshipdiv/Internshipdiv";
import { useDispatch } from "react-redux";
import { getCompanyInfos } from "../../actions/internships";
import InternShipModal from "./internshipDivModal/InternshipDivModal";

const IntershipPage = () => {
  const dispatch = useDispatch();
  const [selectedfield, setselectedfield] = useState("agriculture");
  const [visibilityState, setVisibilityState] = useState("visible");

  useEffect(() => {
    dispatch(getCompanyInfos(selectedfield));
  }, [dispatch, selectedfield]);

  const companyinfos = useSelector((state) => state.internship);

  //setstate from the companyinfo came from internshipdiv component
  const [selectedCompanyDataID, setSelectedCompanyDataID] = useState("");
  // console.log(companyinfos);

  // console.log(companyinfo.length);
  const homePageHandler = () => {
    window.location.href = "/";
  };

  const internshipPage = () => {
    window.location.href = `/internshipPage/${selectedfield}`;
  };

  let history = useHistory();
  useEffect(() => {
    //change url every update of selectedfield
    const pushHistoryHandler = () => {
      history.push(`/internshipPage/${selectedfield}`);
    };

    //detect url change
    //then re-render UI with selectedfield
    window.addEventListener("popstate", (event) => {
      var string = window.location.href;
      var lastword = string.substring(string.lastIndexOf("/") + 1);
      console.log(lastword);
      setselectedfield(lastword);
    });

    //update checked value of clicked and unclicked radiobutton
    var radioButtons = [];
    radioButtons = document.getElementsByClassName("radiobtn");
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].id === selectedfield) {
        radioButtons[i].checked = true;
      } else {
        radioButtons[i].checked = false;
      }
    }
    pushHistoryHandler();
    setVisibilityState("hidden");
  }, [selectedfield, history]);

  //get value from internshipdiv component
  const getChildValue = (value, selectedcompany) => {
    setVisibilityState(value);
    setSelectedCompanyDataID(selectedcompany);
  };

  //to render either the internshipdiv component or internshipdivmodal component
  const renderingFunction = () => {
    if (visibilityState === "visible") {
      return companyinfos.map((data, key) => {
        if (data._id === selectedCompanyDataID) {
          console.log(data);
          return (
            <div className="modal_div" key={key}>
              <InternShipModal
                name={data.companyname}
                address={data.companyaddress}
                contact={data.companycontact}
                email={data.companyemail}
                description={data.companydescription}
              />
            </div>
          );
        }
        return null;
      });
    } else {
      return companyinfos.length ? (
        companyinfos.map((companyinfo, key) => {
          if (companyinfo.field === selectedfield) {
            return (
              <div className="div_main_body" key={key} id={key}>
                <InternshipDiv
                  companyinfo={companyinfo}
                  getValue={getChildValue}
                />
              </div>
            );
          } else {
            return null;
          }
        })
      ) : (
        <></>
      );
    }
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
                      setVisibilityState("hidden");
                      setselectedfield("agriculture");
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
                      setVisibilityState("hidden");
                      setselectedfield("architecture");
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
                      setVisibilityState("hidden");
                      setselectedfield("businessandmarketing");
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
                      setVisibilityState("hidden");
                      setselectedfield("communicationandmedia");
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
                      setVisibilityState("hidden");
                      setselectedfield("education");
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
                      setVisibilityState("hidden");
                      setselectedfield("engineering");
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
                      setVisibilityState("hidden");
                      setselectedfield("fassion");
                    }}
                  />
                  <label htmlFor="fassion">Fassion</label>
                </div>

                <div className="checker_div">
                  <input
                    className="radiobtn"
                    type="radio"
                    name="field"
                    id="finance"
                    value="finance"
                    onClick={() => {
                      setVisibilityState("hidden");
                      setselectedfield("finance");
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
                      setVisibilityState("hidden");
                      setselectedfield("foodindustry");
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
                      setVisibilityState("hidden");
                      setselectedfield("itandcomputerscience");
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
                      setVisibilityState("hidden");
                      setselectedfield("medicineandhealth");
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
                      setVisibilityState("hidden");
                      setselectedfield("politicalscience");
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
                      setVisibilityState("hidden");
                      setselectedfield("tourism");
                    }}
                  />
                  <label htmlFor="tourism">Tourism</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="botnav_rightnav">
          {visibilityState === "visible" ? (
            <div
              className="main_modal_div"
              style={{ visibility: visibilityState }}
            >
              {renderingFunction()}
            </div>
          ) : (
            <div className="internship_div_main_body">
              {renderingFunction()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntershipPage;
