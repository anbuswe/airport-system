import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import "./index.css";

const Sidebar = () => {
  console.log("kavv");
  return (
    <div>
      <div className="sidebar-container1">
        <div className="sidebar-con11">
          <IoMdHome size={34} color="#4A5568" />
          <Link className="link" to="/">
            <p className="sidebar-p1">Home</p>
          </Link>
        </div>
        <div className="sidebar-con11">
          <RxDashboard className="sidebar-icon1" size={25} color="#4A5568" />
          <Link className="link" to="/airport">
            <p className="sidebar-p1">Dashboard</p>
          </Link>
        </div>
        <p className="sidebar-p2">Services</p>
        <p className="sidebar-p3">Airports</p>
        <p className="sidebar-p3">Videos</p>
        <p className="sidebar-p2">Others</p>
        <p className="sidebar-p3">List1</p>
        <p className="sidebar-p3">List2</p>
        <p className="sidebar-p3">List3</p>
      </div>
    </div>
  );
};

export default Sidebar;
