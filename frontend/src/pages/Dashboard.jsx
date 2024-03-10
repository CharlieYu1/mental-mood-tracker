//Dashboard page
import React, { useState, useContext } from "react";
import "../components/styles/memberPage.css";
import Sidebar from "../components/sideBar";
import { Row, Col } from "react-bootstrap";
import { AuthContext } from "../components/AuthContext";

function Dashboard() {
  const { user, loading } = useContext(AuthContext);
  const [showSidebar, setShowSidebar] = useState(true);
  
  if (loading) {
    return <div>Loading...</div>
  }

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
          {user ? <p>Welcome {user.username}!</p> : <p>Login to use the dashboard.</p>}
        </Col>
      </Row>

    </div>
  );
}

export default Dashboard;
