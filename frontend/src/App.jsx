import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col} from "react-bootstrap";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "./components/AuthContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Log from "./pages/Log";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resources from "./pages/Resources";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const { user, loading } = useContext(AuthContext);
	const [showSidebar, setShowSidebar] = useState(false);

	if (loading) {
		return <div>Loading...</div>;
	}

	const handleToggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	return (
		<BrowserRouter>
			<div className="main-content">
				<Row className="gx-0">
					<NavBar />
					{user && (
					<div
						onClick={handleToggleSidebar}
						className="offcanvas-btn"
					>
					<FontAwesomeIcon icon={faArrowRightArrowLeft} />
					</div>
					)}
					{user && (
						<Col className="aside">
							<Sidebar show={showSidebar} setShow={setShowSidebar} />
						</Col>
					)}
					<Col className="dashboard-content">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/dashboard/*" element={<Dashboard />} />
							<Route path="/log" element={<Log />} />
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/resources" element={<Resources />} />
						</Routes>
					</Col>
				</Row>
			</div>
			<Footer className="footer" />
		</BrowserRouter>
	);
}

export default App;
