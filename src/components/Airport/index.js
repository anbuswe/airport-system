import { Component } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useLocation } from "react-router-dom";
import "./index.css";
import Terminal from "../Terminal";
import Services from "../Services";

class Airport extends Component {
  state = { value: "tab1" };
  onSetTab1 = (val) => {
    this.setState({ value: val });
  };
  onSetTab2 = (val) => {
    this.setState({ value: val });
  };
  onSetTab3 = (val) => {
    this.setState({ value: val });
  };
  render() {
    const { value } = this.state;
    console.log(value);
    console.log(useLocation);
    return (
      <div>
        <Header />
        <div className="airport-container1">
          <Sidebar />
          <div className="airport-main-container1">
            <h1 className="airport-info1">
              <span className="airport-info2">Airport > </span>
              Indira Gandhi International Airport
            </h1>
            <h1 className="airport-main-heading">
              {" "}
              Indira Gandhi International Airport{" "}
            </h1>
            <div>
              <div className="tab-list">
                <div>
                  <p
                    className={
                      value === "tab1"
                        ? "airport-info-black"
                        : "airport-info-p1"
                    }
                    onClick={() => this.onSetTab2("tab1")}
                  >
                    Terminals
                  </p>
                  <hr
                    className={
                      value === "tab1" ? "line-info-black" : "line-info-p1"
                    }
                  />
                </div>
                <div>
                  <p
                    className={
                      value === "tab2"
                        ? "airport-info-black"
                        : "airport-info-p1"
                    }
                    onClick={() => this.onSetTab2("tab2")}
                  >
                    Transport
                  </p>
                  <hr
                    className={
                      value === "tab2" ? "line-info-black" : "line-info-p1"
                    }
                  />
                </div>
                <div>
                  <p
                    className={
                      value === "tab3"
                        ? "airport-info-black"
                        : "airport-info-p1"
                    }
                    onClick={() => this.onSetTab2("tab3")}
                  >
                    Contact details
                  </p>
                  <hr
                    className={
                      value === "tab3" ? "line-info-black" : "line-info-p1"
                    }
                  />
                </div>
              </div>

              <div className="tab-content">
                {value === "tab1" && (
                  <div>
                    <Terminal />
                  </div>
                )}
                {value === "tab2" && (
                  <div>
                    <p>Transport</p>
                  </div>
                )}
                {value === "tab3" && (
                  <div>
                    <p>Contact details</p>
                  </div>
                )}
              </div>
            </div>
            <div className="service-airport">
              <Services />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Airport;
