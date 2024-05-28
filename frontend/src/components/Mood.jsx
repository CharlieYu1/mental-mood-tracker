import React, { useState, useContext, useEffect } from "react";

import {Container, Row, Col, Card} from "react-bootstrap";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import MoodChart from "../components/MoodChart";

import logsService from '../services/logs'
import { AuthContext } from "../components/AuthContext";

function Mood() {
	const { token, user, loading } = useContext(AuthContext);
	
	// Initialize state for the current date
	const [currentDate, setCurrentDate] = useState(dayjs());
	
	useEffect(() => {
		logsService.getMonthlyMoods(token, currentDate.format('YYYY-MM-DD')).then(res => {
			console.log(res)
	
		})
		
		
	}, [token, currentDate])
	
	// Navigate to the previous month
	const goToPreviousMonth = () => {
		setCurrentDate(currentDate.subtract(1, "month"));
	};
	
	// Navigate to the next month
	const goToNextMonth = () => {
		setCurrentDate(currentDate.add(1, "month"));
	};
	
	const formattedDate = currentDate.format("MMMM/YYYY");
	
	
	
	return (
		<Container className="content col-10">
		{/* Date */}
		<Row>
		<Col className="text-center">
		<h2>
		<FontAwesomeIcon
		icon={faCaretLeft}
		className="dashboard-date-arrow"
		onClick={goToPreviousMonth}
		/>
		{formattedDate}
		<FontAwesomeIcon
		icon={faCaretRight}
		className="dashboard-date-arrow"
		onClick={goToNextMonth}
		/>
		</h2>
		</Col>
		</Row>
		
		{/* Dashboard cards */}
		<Row className="d-md-flex flex-md-equal my-md-3 mood-row">
		<Col md className="pt-3 px-3 px-md-3 overflow-hidden">
		<Card className="shadow-sm h-100">
		<Card.Header className="dashboard-card-title mood-chart-header">
		<h5>Monthly Mood Chart</h5>
		</Card.Header>
		<Card.Body>
		<MoodChart/>
		</Card.Body>
		</Card>
		</Col>
		<Col md className="pt-3 px-3 px-md-3 overflow-hidden">
		<Card className="shadow-sm h-100">
		<Card.Header className="dashboard-card-title mood-count-header">
		<h5>Monthly Mood Count</h5>
		</Card.Header>
		<Card.Body>
		<Card.Text>TBC</Card.Text>
		</Card.Body>
		</Card>
		</Col>
		</Row>
		
		<Row className="d-md-flex flex-md-equal w-100 my-md-3 mood-row">
		<Col md className="pt-3 px-3 px-md-3 overflow-hidden">
		<Card className="shadow-sm h-100">
		<Card.Header className="dashboard-card-title sleeping-hrs-header">
		<h5>Monthly Sleeping Hours</h5>
		</Card.Header>
		<Card.Body>
		<Card.Text>TBC</Card.Text>
		</Card.Body>
		</Card>
		</Col>
		<Col md className="pt-3 px-3 px-md-3 overflow-hidden">
		<Card className="shadow-sm h-100">
		<Card.Header className="dashboard-card-title activities-count-header">
		<h5>Monthly Activities Counts</h5>
		</Card.Header>
		<Card.Body>
		<Card.Text>TBC</Card.Text>
		</Card.Body>
		</Card>
		</Col>
		</Row>
		</Container>
	);
}

export default Mood;
