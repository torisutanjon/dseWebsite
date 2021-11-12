import React from "react";
import "./internshipDivModal.css";

const InternshipDivModal = ({
  getValue,
  name,
  address,
  contact,
  email,
  description,
}) => {
  const passCompanyDataHandler = () => {
    const urlCompanyName = name.replace(/ /g, "");

    var childWindow = window.open(
      `http://localhost:3000/overview=${urlCompanyName}`
    );
    childWindow.window.name = name;
    childWindow.window.address = address;
    childWindow.window.contact = contact;
    childWindow.window.email = email;
  };

  return (
    <>
      <div className="modal_top_container">
        <div className="top_upper_container">
          <div className="upper_logo_div">
            <img src="" alt="company logo here" />
          </div>
          <div className="upper_companyname_div">
            <p>{name}</p>
          </div>
        </div>
        <div className="top_lower_container">
          <div className="lower_left_container">
            <div className="company_left_data_div">
              <p className="label_p">Location : </p>
              <p className="data_p"> &nbsp; {address}</p>
            </div>
            <div className="company_left_data_div">
              <p className="label_p">Contact No. : </p>
              <p className="data_p"> &nbsp; {contact}</p>
            </div>
            <div className="company_left_data_div">
              <p className="label_p">E-Mail : </p>
              <p className="data_p"> &nbsp; {email}</p>
            </div>
          </div>
          <div className="lower_right_container">
            <p className="company_desc_title_div">Company's Description:</p>
            <p className="company_desc_div">{description}</p>
          </div>
        </div>
      </div>
      <div className="modal_bottom_container">
        <div className="apply_btn_div">
          <button
            className="apply_btn"
            type="button"
            onClick={() => passCompanyDataHandler()}
          >
            Apply Now!
          </button>
        </div>
        <div className="goback_btn_div">
          <button
            className="goback_btn"
            type="button"
            onClick={() => {
              window.location.href =
                "http://localhost:3000/internshipPage/:field";
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default InternshipDivModal;
