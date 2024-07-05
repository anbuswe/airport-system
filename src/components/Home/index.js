import Header from "../Header";
import Sidebar from "../Sidebar";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";
//<Link to={`/airport/${index}`} state={{ airport }}>
//                     <FaPencil />
//                 </Link>
import { IoMdArrowDown } from "react-icons/io";
import "./index.css";

const ItemsList = [
  {
    name: "Indira Gandhi International Airport",
    country: "India",
    code: "DEL",
    terminal: "3",
  },
  {
    name: "Dubai International Airport",
    country: "UAE",
    code: "DXB",
    terminal: "5",
  },
  { name: "Heathrow Airport", country: "England", code: "LHR", terminal: "6" },
  { name: "Istanbul Airport", country: "Turkey", code: "IST", terminal: "3" },
  {
    name: "Rajiv Gandhi International Airport",
    country: "Texas",
    code: "DFW",
    terminal: "14",
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-container1">
        <Sidebar />
        <div className="home-main-container1">
          <div className="home-con1">
            <h1 className="home-heading1">Airports</h1>
            <button className="home-button-add">+ Add new</button>
          </div>
          <table>
            <thead>
              <tr>
                <th className="home-checkbox1">
                  <input className="home-check-element" type="checkbox" />
                </th>
                <th className="home-all-items">
                  All Airports
                  <IoMdArrowDown />
                </th>
                <th className="home-country">Country</th>
                <th className="home-abbrevation">Code</th>
                <th className="home-terminals1">Terminals</th>
              </tr>
            </thead>
            <tbody>
              {ItemsList.map((airport, index) => (
                <tr key={index}>
                  <td className="home-checkbox1">
                    <input
                      type="checkbox"
                      aria-label={`Select ${airport.name}`}
                    />
                  </td>
                  <td className="home-all-items">{airport.name}</td>
                  <td className="home-country">{airport.country}</td>
                  <td className="home-abbrevation">{airport.code}</td>
                  <td className="home-terminals">{airport.terminal}</td>
                  <td className="home-pencil">
                    <Link to={`/airport`} state={{ airport }}>
                      <FaPencil />
                    </Link>
                  </td>
                  <td className="home-delete-icon">
                    <RiDeleteBin6Line />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
