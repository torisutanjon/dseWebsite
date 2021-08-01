import React from "react";
import "./internshipdiv.css";

const internshipdiv = ({ companyinfo }) => {
  return (
    <>
      <div className="date_post_div">
        <p className="posted-p">
          Posted: <b>{companyinfo.dateposted}</b>
        </p>
      </div>
      <div className="company_logo_div">
        <img src={companyinfo.companylogo} alt="someimage" />
      </div>
      <div className="companyName_div">
        <p>{companyinfo.companyname}</p>
      </div>

      <div className="position_div">
        <p>{companyinfo.positionoffered}</p>
      </div>
      <div className="desc_div">
        <p>{companyinfo.companydescription}</p>
      </div>
      <div className="duration_div">
        <p>{companyinfo.internshipduration}</p>
      </div>
      <div className="apply_button_div">
        <button type="button">Apply Now</button>
      </div>
    </>
  );
};

export default internshipdiv;
