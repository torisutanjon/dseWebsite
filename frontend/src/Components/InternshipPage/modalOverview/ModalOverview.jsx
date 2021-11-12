import React, { useState, useEffect } from "react";
import "./ModalOverview.css";
const ModalOverview = () => {
  const [inputFile, setInputFile] = useState([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [course, setCourse] = useState("");
  const [yearlevel, setYearLevel] = useState("");

  const setData = () => {
    const interndata = {
      internname: name,
      interncontact: contact,
      internemail: email,
      internschool: school,
      interncourse: course,
      internyearlevel: yearlevel,
    };
    console.log(interndata);
  };

  /////////////////////////////////////////////////////////////
  // Things to do:
  //   find a way to make a function inside a regex
  /////////////////////////////////////////////////////////////
  const deletePhotoHandler = (id) => {
    console.log(id);
  };

  const inputFileOnChangeHandler = (selectedFile) => {
    if (inputFile.length < 4) {
      selectedFile.id = setFileIdHandler();
      setInputFile((oldState) => [...oldState, selectedFile]);
    } else {
      window.alert("4 attachments only");
      document.getElementById("inputFileElement").value = "";
    }
  };
  const setFileIdHandler = () => {
    let id = Math.floor(Math.random() * 100000 + 1);
    inputFile.forEach((file) => {
      if (inputFile.length > 0) {
        while (id === file.id) {
          id = Math.floor(Math.random() * 100000 + 1);
        }
      }
    });
    return id;
  };
  useEffect(() => {
    document.getElementById("image_gallery").innerHTML = "";
    inputFile.map((file) => {
      var innerHTMLText = `
        <div class = "output_image_div" id = "${
          file.id
        }" style = "height: 95%; width: 95%; margin: 2.5%">
          <div style = "height: 70%; width: 100%; display: flex; justify-content: center; align-items: center">
              <img onclick = "${() => deletePhotoHandler(file.id)}" id = "img${
        file.id
      }" src="${URL.createObjectURL(
        file
      )}" style = "cursor: pointer; max-height: 100%; max-width: 100%; display: block" />
          </div>
          <div style = "height: 30%; width: 100%; display: flex; justify-content: center; align-items: center">
              <p onclick = "${() => deletePhotoHandler(file.id)}" id = "p${
        file.id
      }" style = "cursor: pointer">${file.name.substring(1, 10)}</p>
          </div>
        </div>
      `;

      let element = document.getElementById("image_gallery");
      element.innerHTML += innerHTMLText;

      return element;
    });
  }, [inputFile]);

  return (
    <div className="modal_overview_main_body">
      <div className="main_container">
        <div className="upper_nav"></div>
        <div className="middle_container">
          <div className="middle_container_left_side">
            <div className="left_side_div title_div">
              <p>Intern's Information</p>
            </div>
            <div className="left_side_div modal_name_div">
              <div className="label_div">
                <label htmlFor="intern_name">Name :</label>
              </div>
              <div className="input_div">
                <input
                  type="text"
                  name="intern_name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="left_side_div contact_div">
              <div className="label_div">
                <label htmlFor="intern_contact">Contact Number :</label>
              </div>
              <div className="input_div">
                <input
                  type="text"
                  name="intern_contact"
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
            </div>
            <div className="left_side_div modal_email_div">
              <div className="label_div">
                <label htmlFor="intern_email">E-mail :</label>
              </div>
              <div className="input_div">
                <input
                  type="text"
                  name="intern_email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="left_side_div school_div">
              <div className="label_div">
                <label htmlFor="intern_school">School :</label>
              </div>
              <div className="input_div">
                <input
                  type="text"
                  name="intern_school"
                  onChange={(e) => setSchool(e.target.value)}
                />
              </div>
            </div>
            <div className="left_side_div course_div">
              <div className="label_div">
                <label htmlFor="intern_course">Course / Program :</label>
              </div>
              <div className="input_div">
                <input
                  type="text"
                  name="intern_course"
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>
            </div>
            <div className="left_side_div year_level_div">
              <div className="label_div">
                <label htmlFor="intern_year_level">Year level :</label>
              </div>
              <div className="input_div">
                <input
                  type="text"
                  name="intern_year_level"
                  onChange={(e) => setYearLevel(e.target.value)}
                />
              </div>
            </div>
            <div className="left_side_div attachment_div">
              <div className="label_div">
                <label htmlFor="intern_attachment">Attachments :</label>
              </div>
              <div className="input_div">
                <input
                  type="file"
                  id="inputFileElement"
                  name="intern_attachment"
                  accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
                  text/plain, application/pdf,image/png , image/jpeg"
                  onChange={() => {
                    inputFileOnChangeHandler(
                      document.getElementById("inputFileElement").files[0]
                    );
                  }}
                  onClick={() => {
                    if (inputFile.length < 4) {
                      document.getElementById("inputFileElement").value = "";
                    } else {
                      window.alert("4 attachments only");
                      document.getElementById("inputFileElement").value = "";
                    }
                  }}
                />
              </div>
            </div>
            <div id="image_gallery"></div>
          </div>
          <div className="middle_container_right_side">
            <div className="right_side_topside">
              <div className="img_div">
                <img src="" alt="" />
              </div>
              <div className="name_div">
                <p>{window.name}</p>
              </div>
            </div>
            <div className="right_side_bottomside">
              <div className="right_side_bottomside_data_div">
                <div className="plabel_div">
                  <p className="plabel">Location:</p>
                </div>
                <div className="pdata_div">
                  <p className="pdata">{window.address}</p>
                </div>
              </div>
              <div className="right_side_bottomside_data_div">
                <div className="plabel_div">
                  <p className="plabel">Contact No. :</p>
                </div>
                <div className="pdata_div">
                  <p className="pdata">{window.contact}</p>
                </div>
              </div>
              <div className="right_side_bottomside_data_div">
                <div className="plabel_div">
                  <p className="plabel">E-Mail:</p>
                </div>
                <div className="pdata_div">
                  <p className="pdata">{window.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lower_nav">
          <button
            type="button"
            onClick={
              // () => files.map((file) => console.log(file))
              () => {
                setData();
              }
            }
          >
            Send Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalOverview;
