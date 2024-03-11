import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faBookmark, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../components/AuthContext";
import { NavItem } from "react-bootstrap";

function Sidebar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="sidebar-user">
        <Image
          src="https://img.freepik.com/premium-photo/cute-teddy-cute-teddy-bear-isolated-white-background_176100-305.jpg?w=500"
          roundedCircle
          className="sidebar-img"
        />
        {user && <span className="sidebar-username">Hi {user.username}!</span>}
      </div>
      
      <Nav className="flex-column mb-auto">
				<NavItem className="sidebar-item" >
        <Nav.Link as={Link} to="/dashboard/mood">
          <FontAwesomeIcon icon={faSmile} />
          Mood / Activities
        </Nav.Link></NavItem>
				<NavItem className="sidebar-item">
        <Nav.Link as={Link} to="/dashboard/journal" >
          <FontAwesomeIcon icon={faBookmark} />
          Journal
        </Nav.Link></NavItem>
				<NavItem className="sidebar-item">
        <Nav.Link as={Link} to="/dashboard/logs" >
          <FontAwesomeIcon icon={faPenToSquare} />
          Logs
        </Nav.Link></NavItem>

				<hr></hr>
				
				
      </Nav>
		

    </div>
  );
}

export default Sidebar;
