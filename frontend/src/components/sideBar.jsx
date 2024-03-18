import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faBookmark,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "./AuthContext";
import { Button, NavItem, Offcanvas } from "react-bootstrap";

function Sidebar() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <div className="sidebar-container">
      {/* Offcanvas menu for small screens */}
			<Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
      >
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="sidebar">
            <div className="sidebar-user">
              <Image
                src="../assets/images/user-photo.jpg"
                roundedCircle
                className="sidebar-img"
              />
              {user && (
                <span className="sidebar-username">{user.username}</span>
              )}
            </div>

            <Nav className="flex-column mb-auto nav-fill">
              <NavItem className="sidebar-item">
                <Nav.Link
                  as={Link}
                  to="/dashboard/mood"
                  className={
                    location.pathname === "/dashboard/mood"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <FontAwesomeIcon icon={faSmile} />
                  Mood / Activities
                </Nav.Link>
              </NavItem>
              <NavItem className="sidebar-item">
                <Nav.Link
                  as={Link}
                  to="/dashboard/journal"
                  className={
                    location.pathname === "/dashboard/journal"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <FontAwesomeIcon icon={faBookmark} />
                  Journal
                </Nav.Link>
              </NavItem>
              <NavItem className="sidebar-item">
                <Nav.Link
                  as={Link}
                  to="/dashboard/logs"
                  className={
                    location.pathname === "/dashboard/logs"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                  Logs
                </Nav.Link>
              </NavItem>
              <hr />
              <NavItem className="sidebar-item">
                <Nav.Link
                  as={Link}
                  to="/dashboard/logs"
                  className={
                    location.pathname === "/dashboard/setting"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <FontAwesomeIcon icon={faGear} />
                  Setting
                </Nav.Link>
              </NavItem>
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Sidebar for large screens */}
      <div className="sidebar">
        <div className="sidebar-user">
          <Image
            src="../assets/images/user-photo.jpg"
            roundedCircle
            className="sidebar-img"
          />
          {user && <span className="sidebar-username">{user.username}</span>}
        </div>

        <Nav className="flex-column mb-auto nav-fill">
          <NavItem className="sidebar-item">
            <Nav.Link
              as={Link}
              to="/dashboard/mood"
              className={
                location.pathname === "/dashboard/mood"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <FontAwesomeIcon icon={faSmile} />
              Mood / Activities
            </Nav.Link>
          </NavItem>
          <NavItem className="sidebar-item">
            <Nav.Link
              as={Link}
              to="/dashboard/journal"
              className={
                location.pathname === "/dashboard/journal"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <FontAwesomeIcon icon={faBookmark} />
              Journal
            </Nav.Link>
          </NavItem>
          <NavItem className="sidebar-item">
            <Nav.Link
              as={Link}
              to="/dashboard/logs"
              className={
                location.pathname === "/dashboard/logs"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <FontAwesomeIcon icon={faPenToSquare} />
              Logs
            </Nav.Link>
          </NavItem>
          <hr />
          <NavItem className="sidebar-item">
            <Nav.Link
              as={Link}
              to="/dashboard/logs"
              className={
                location.pathname === "/dashboard/setting"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <FontAwesomeIcon icon={faGear} />
              Setting
            </Nav.Link>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
