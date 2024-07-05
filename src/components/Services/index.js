import React, { useState } from "react";
import "./index.css";
import { FaUpload } from "react-icons/fa6";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [switchOn, setSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setSwitchOn(!switchOn);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  return (
    <div>
      <h1>Services</h1>
      <p>Lost & found</p>
      <hr className="line-break" />

      <div className="servicesc1">
        <div className="servicesslectedc1">
          <div className="servicesnamec1">
            <label className="service-label1" htmlFor="textInput">
              Service Name
            </label>
            <input
              className="service-input1"
              type="text"
              id="textInput"
              placeholder="Type here..."
              disabled
              value="Lost & Found"
            />
          </div>

          <div className="servicesnamec1">
            <label className="service-label1" htmlFor="options">
              Category
            </label>
            <select
              className="service-input2"
              id="options"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="servicesnamec1">
            <label className="service-label1" htmlFor="options">
              Sub Category
            </label>
            <select
              id="options"
              className="service-input2"
              value={selectedOption1}
              onChange={handleOptionChange1}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <label className="upload-btn1">
            <input
              type="file"
              accept="image/*"
              // onChange={handleImageUpload}
              style={{ display: "none" }}
            />
            <FaUpload /> Upload Image
          </label>

          <div className="switchc1">
            <label>
              <input
                type="checkbox"
                checked={switchOn}
                onChange={toggleSwitch}
                style={{ display: "none", width: "26px", height: "14px" }}
              />
            </label>
            <p className="show">Show Image</p>
          </div>
          <div className="servicesnamec1">
            <label className="service-label1" htmlFor="textInput">
              Description
            </label>
            <input
              type="text"
              className="service-input1"
              id="textInput"
              placeholder="Type here"
              style={{ width: "392px" }}
            />
          </div>
        </div>

        <button className="service-save">Save</button>
      </div>

      <p className="service-p-element1">Lounge</p>
      <hr className="line-break" />
      <p className="service-p-element2">Money Exchange</p>
      <hr className="line-break" />
    </div>
  );
};

export default Services;
