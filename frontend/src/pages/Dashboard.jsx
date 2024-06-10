//Dashboard page
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../components/styles/memberPage.css";
import Mood from "../components/Mood";
import Journal from "../components/Journal";
import Logs from "../components/Logs";
import Setting from "../components/Setting";
import { AuthContext } from "../components/AuthContext";

function Dashboard() {
	const { user, loading } = useContext(AuthContext);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>

			{/* Dashboard Content */}
			<Routes>
				<Route path="/mood" element={<Mood />} />
				<Route path="/journal" element={<Journal />} />
				<Route path="/logs" element={<Logs />} />
				<Route path="/setting" element={<Setting />} />
			</Routes>
		</div>
	);
}

export default Dashboard;
