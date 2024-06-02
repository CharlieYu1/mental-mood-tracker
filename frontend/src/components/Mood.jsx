import React, { useState, useContext, useEffect } from "react";

import {Container, Row, Col, Card} from "react-bootstrap";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import MoodChart from "../components/MoodChart";
import MoodCountChart from "../components/MoodCountChart"
import SleepChart from "../components/SleepChart"
import ActivitiesCountChart from "../components/ActivitiesCountChart"

import logsService from '../services/logs'
import { AuthContext } from "../components/AuthContext";

function Mood() {
	const { token, user, loading } = useContext(AuthContext);
	
	const [ firstDayOfMonth, setFirstDayOfMonth ] = useState(new Date())
	const [ lastDayOfMonth, setLastDayOfMonth ] = useState(new Date())
	const [ monthlyMoodData, setMonthlyMoodData ] = useState([])
	const [ monthlySleepHours, setMonthlySleepHours ] = useState([])
	const [ monthlyActivitiesCount, setMonthlyActivitiesCount ] = useState({})

	
	// Initialize state for the current date
	const [currentDate, setCurrentDate] = useState(dayjs());

	
	
	useEffect(() => {
		logsService.getMonthlyMoods(token, currentDate.format('YYYY-MM-DD')).then(res => {
			const monthlyMoodsChartData = res.monthlyMoods.map(item => {
				return {
					x: new Date(item.date), y: item.mood
				}
			})
			setMonthlyMoodData(monthlyMoodsChartData)
			
		})
		logsService.getMonthlySleepHours(token, currentDate.format('YYYY-MM-DD')).then(res => {
			const monthlySleepHoursData = res.monthlySleepData.map(item => {
				return {
					x: new Date(item.date), y: item.sleepDuration / 60
				}
			})
			setMonthlySleepHours(monthlySleepHoursData)
		})
		logsService.getMonthlyActivitiesCount(token, currentDate.format('YYYY-MM-DD')).then(res => {
			setMonthlyActivitiesCount(res.monthlyActivitiesCount)
			console.log(res.monthlyActivitiesCount)
		})
		
		
		
	}, [token, currentDate])
	
	useEffect(() => {
		// console.log(currentDate)
		let year = currentDate["$y"]
		let month = currentDate["$M"]
		setFirstDayOfMonth(new Date(year, month, 1))
		setLastDayOfMonth(new Date(year, month + 1, 0))
	}, [currentDate])
	
	
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
		<MoodChart firstDayOfMonth={firstDayOfMonth} lastDayOfMonth={lastDayOfMonth} moodData={monthlyMoodData} />
		</Card.Body>
		</Card>
		</Col>
		<Col md className="pt-3 px-3 px-md-3 overflow-hidden">
		<Card className="shadow-sm h-100">
		<Card.Header className="dashboard-card-title mood-count-header">
		<h5>Monthly Mood Count</h5>
		</Card.Header>
		<Card.Body>
		<MoodCountChart moodData={monthlyMoodData} />
		
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
		<SleepChart firstDayOfMonth={firstDayOfMonth} lastDayOfMonth={lastDayOfMonth} sleepHours={monthlySleepHours} />
		</Card.Body>
		</Card>
		</Col>
		<Col md className="pt-3 px-3 px-md-3 overflow-hidden">
		<Card className="shadow-sm h-100">
		<Card.Header className="dashboard-card-title activities-count-header">
		<h5>Monthly Activities Counts</h5>
		</Card.Header>
		<Card.Body>
		<ActivitiesCountChart activitiesCount={monthlyActivitiesCount} />
		</Card.Body>
		</Card>
		</Col>
		</Row>
		</Container>
	);
}

export default Mood;
