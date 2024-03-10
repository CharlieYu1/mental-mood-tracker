import React, { useState } from "react";
import "../components/styles/memberPage.css";
import Sidebar from "../components/sideBar";
import { Row, Col } from "react-bootstrap";

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <Row>
        {showSidebar && (
          <Col className="aside">            
            <Sidebar />
            {/* <button className={`toggle-button${showSidebar ? " active" : ""}`} onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button> */}
          </Col>
        )}
        <Col className={`content${showSidebar ? " sidebar-open" : ""}`}>
          {/* Dashboard Content */}
          <p>Dashboard Content Goes Here</p>
        </Col>
      </Row>

    </div>
  );
}

export default Dashboard;
