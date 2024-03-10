//SideBar page
import React from "react";
import "./styles/memberPage.css";

import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faBookmark, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar-user">
				<Image
					src="https://img.freepik.com/premium-photo/cute-teddy-cute-teddy-bear-isolated-white-background_176100-305.jpg?w=500
      "
					roundedCircle
					className="sidebar-img"
				/>
				<span className="">User</span>
			</div>
			<hr />

			<ul className="nav flex-column mb-auto">
				<li className="nav-item sidebar-item">
					<a href="#" className="nav-link" aria-current="page">
						<FontAwesomeIcon icon={faSmile} />
						Mood / Activities
					</a>
				</li>
				<li className="nav-item sidebar-item">
					<a href="#" className="nav-link" aria-current="page">
						<FontAwesomeIcon icon={faBookmark} />
						Journal
					</a>
				</li>
				<li className="nav-item sidebar-item">
					<a href="#" className="nav-link" aria-current="page">
						<FontAwesomeIcon icon={faPenToSquare} />
						Logs
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
