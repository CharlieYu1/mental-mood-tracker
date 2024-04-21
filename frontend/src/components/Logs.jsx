import React, { useState, useEffect } from "react";
import { Container, Row, Card, Button, Col, Form } from "react-bootstrap";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCaretLeft,
	faCaretRight,
	faHouseChimneyWindow,
	faUserGroup,
	faHeart,
	faComputer,
	faPalette,
	faVolleyball,
	faScrewdriverWrench,
	faGraduationCap,
	faPersonWalkingLuggage,
	faPersonRunning,
	faDumbbell,
	faSpa,
	faPersonBiking,
	faPersonWalking,
	faMugSaucer,
	faUtensils,
	faBellConcierge,
} from "@fortawesome/free-solid-svg-icons";
import { faComment, faFaceSmile } from "@fortawesome/free-regular-svg-icons";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import icon1 from "/assets/images/mood-icon-01.png";
import icon10 from "/assets/images/mood-icon-05.png";

const activitiesList = [
	{ type: "social", name: "Family Time", icon: faHouseChimneyWindow},
	{ type: "social", name: "Friend Hangout", icon: faUserGroup},
	{ type: "social", name: "Friend Date", icon: faHeart},
	{ type: "social", name: "Social Events", icon: faComment},
	{ type: "social", name: "Socializing Online", icon: faComputer},
	{ type: "social", name: "Others", icon: faFaceSmile},
	{ type: "hobbies", name: "Arts/Music", icon: faPalette},
	{ type: "hobbies", name: "Sports", icon: faVolleyball},
	{ type: "hobbies", name: "DIY", icon: faScrewdriverWrench},
	{ type: "hobbies", name: "Learning", icon: faGraduationCap},
	{ type: "hobbies", name: "Travel", icon: faPersonWalkingLuggage},
	{ type: "hobbies", name: "Others", icon: faFaceSmile},
	{ type: "exercises", name: "Jogging", icon: faPersonRunning},
	{ type: "exercises", name: "Gym", icon: faDumbbell},
	{ type: "exercises", name: "Yoga", icon: faSpa},
	{ type: "exercises", name: "Cycling", icon: faPersonBiking},
	{ type: "exercises", name: "Walking", icon: faPersonWalking},
	{ type: "exercises", name: "Others", icon: faFaceSmile},
	{ type: "meal", name: "Breakfast", icon: faMugSaucer},
	{ type: "meal", name: "Lunch", icon: faUtensils},
	{ type: "meal", name: "Dinner", icon: faBellConcierge},
	{ type: "meal", name: "Others", icon: faFaceSmile}
]




function Logs() {
	// Initialize state for the current date
	const [currentDate, setCurrentDate] = useState(dayjs());

	// Initialize state for log items
	const [mood, setMood] = useState(null);
	const [moodRemarks, setMoodRemarks] = useState("");
	const [timeToBed, setTimeToBed] = useState(null);
	const [timeWakeUp, setTimeWakeUp] = useState(null);
	const [sleepDuration, setSleepDuration] = useState(null);
	const [sleepDurationDisplay, setSleepDurationDisplay] = useState("");
	const [sleepQuality, setSleepQuality] = useState(null);
	const [sleepRemarks, setSleepRemarks] = useState(null);
	const [activities, setActivities] = useState(Object.fromEntries(
		activitiesList.map(activity => [activity.name, false])
	));
	// console.log(activities)

	// handlers for log items
	const handleMoodChange = (mood) => {
		setMood(mood);
		// console.log(mood)
	};

	const handleMoodRemarksChange = (event) => {
		setMoodRemarks(event.target.value);
		// console.log(moodRemarks)
	};

	const handleTimeToBedChange = (time) => {
		setTimeToBed(time);
	};

	const handleTimeWakeUpChange = (time) => {
		setTimeWakeUp(time);
	};

	const handleSleepQualityChange = (sleepQuality) => {
		setSleepQuality(sleepQuality);
		// console.log(sleepQuality)
	}

	const handleSleepRemarksChange = (event) => {
		setSleepRemarks(event.target.value);
		// console.log(sleepRemarks)
	};

	const handleActivityChange = (activity) => {
		setActivities({
			...activities,
			[activity]: !activities[activity]
		})
		console.log(activities)
	}

	// useEffect for mood changes
	useEffect(() => {}, [mood]);

	// useEffect hook for timeToBed and timeWakeUp changes
	useEffect(() => {
		// console.log("Time to bed: ", timeToBed)
		// console.log("Time wake up: ", timeWakeUp)
		if (timeToBed && timeWakeUp) {
			let timeSleepInMinutes = timeWakeUp.diff(timeToBed, "m");
			if (timeSleepInMinutes < 0) {
				timeSleepInMinutes += 24 * 60;
			}
			setSleepDuration(timeSleepInMinutes);
			const sleepHours = Math.floor(timeSleepInMinutes / 60);
			const sleepMinutes = timeSleepInMinutes % 60;
			setSleepDurationDisplay(
				`${sleepHours.toString().padStart(2, "0")}:${sleepMinutes
					.toString()
					.padStart(2, "0")}`
			);
			// console.log("sleepDuration: ", sleepDuration);
		}
	}, [timeToBed, timeWakeUp, sleepDuration]);

	// Navigate to the previous month
	const goToPreviousMonth = () => {
		setCurrentDate(currentDate.subtract(1, "month"));
	};

	// Navigate to the next month
	const goToNextMonth = () => {
		setCurrentDate(currentDate.add(1, "month"));
	};

	let formattedDate;
	if (currentDate.isSame(dayjs(), "day")) {
		formattedDate = "Today, " + currentDate.format("DD/MM/YYYY");
	} else {
		formattedDate = currentDate.format("DD/MM/YYYY");
	}

	// Time picker
	const today = dayjs();
	const todayStartOfTheDay = today.startOf("day");
	// const classes = useStyles();

	return (
		<Container className="content col-10">
			{/* Date */}
			<Row>
				<Col className="dashboard-date">
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

			{/* Button */}
			<Row className="justify-content-center">
				<Button className="save-btn">Save</Button>
			</Row>

			{/* Dashboard cards - Rate Mood */}
			<Row className="d-md-flex flex-md-equal my-3 mood-row">
				<Card className="shadow-sm h-100 px-3 pt-3 pb-1 align-items-center">
					<Card.Title className="dashboard-card-title log-title">
						How would you rate your mood?
					</Card.Title>
					<Card.Body>
						<div className="d-flex flex-wrap log-btn-row">
							<img src={icon1} className="icon-img" alt="Image 1" />
							{[...Array(10)].map((_, index) => (
								<Button
									key={index}
									className={`log-btn-${index + 1} ${mood === index + 1 ? 'selected' : ''}`}
									// style={{ backgroundColor: getColor(index) }}
									onClick={() => handleMoodChange(index + 1)}
								>
									{index + 1}
								</Button>
							))}
							<img src={icon10} className="icon-img" alt="Image 10" />
						</div>
					</Card.Body>
					<Card.Body className="w-100">
						<Form.Group className="w-100">
							<Form.Control
								as="textarea"
								rows={3}
								placeholder="What made you feel good or bad today? Add note... (Optional)"
								onChange={handleMoodRemarksChange}
							/>
						</Form.Group>
					</Card.Body>
				</Card>
			</Row>

			{/* Dashboard cards - Sleeping Log */}
			<Row className="d-md-flex flex-md-equal my-3 mood-row">
				<Card className="shadow-sm h-100 px-3 pt-3 pb-1 align-items-center">
					<Card.Title className="dashboard-card-title log-title">
						Sleeping Log
					</Card.Title>

					<Card.Body className="w-100">
						<Container className="d-flex w-100 justify-content-center px-0">
							<Row className="w-100">
								<Col xs={12} md={6} lg={4}>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DemoContainer components={["TimePicker"]}>
											<DemoItem label="Time Went to Bed">
												<TimePicker
													defaultValue={todayStartOfTheDay}
													onChange={handleTimeToBedChange}
												/>
											</DemoItem>
										</DemoContainer>
									</LocalizationProvider>
								</Col>

								<Col xs={12} md={6} lg={4}>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DemoContainer components={["TimePicker"]}>
											<DemoItem label="Time Woke up">
												<TimePicker
													defaultValue={todayStartOfTheDay}
													onChange={handleTimeWakeUpChange}
												/>
											</DemoItem>
										</DemoContainer>
									</LocalizationProvider>
								</Col>
								<Col xs={12} md={12} lg={4}>
									<div>Duration: {sleepDurationDisplay}</div>
								</Col>
							</Row>
						</Container>
					</Card.Body>

					<Card.Body className="d-flex flex-column w-100">
						<Row className="sleep-btn w-100">
							<Col lg={2}>
								<Card.Text>Quality:</Card.Text>
							</Col>
							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="align-items-center text-center px-0"
							>
								<Button className={`quality-btn-${5} ${sleepQuality === 5 ? 'selected' : ''}`} onClick={() => handleSleepQualityChange(5)}>Excellent</Button>
							</Col>
							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="align-items-center text-center px-0"
							>
								<Button className={`quality-btn-${4} ${sleepQuality === 4 ? 'selected' : ''}`} onClick={() => handleSleepQualityChange(4)}>Good</Button>
							</Col>
							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="align-items-center text-center px-0"
							>
								<Button className={`quality-btn-${3} ${sleepQuality === 3 ? 'selected' : ''}`} onClick={() => handleSleepQualityChange(3)}>Fair</Button>
							</Col>
							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="align-items-center text-center px-0"
							>
								<Button className={`quality-btn-${2} ${sleepQuality === 2 ? 'selected' : ''}`} onClick={() => handleSleepQualityChange(2)}>Poor</Button>
							</Col>
							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="align-items-center text-center px-0"
							>
								<Button className={`quality-btn-${1} ${sleepQuality === 1 ? 'selected' : ''}`} onClick={() => handleSleepQualityChange(1)}>Very Poor</Button>
							</Col>
						</Row>
					</Card.Body>

					<Card.Body className="w-100">
						<Form.Group className="w-100">
							<Form.Control as="textarea" rows={3} placeholder="Note... (Optional)" onChange={handleSleepRemarksChange} />
						</Form.Group>
					</Card.Body>
				</Card>
			</Row>

			{/* Dashboard cards - Activities Log */}
			<Row className="d-md-flex flex-md-equal my-3 mood-row">
				<Card className="shadow-sm h-100 px-3 pt-3 pb-1 align-items-center">
					<Card.Title className="dashboard-card-title log-title">
						Activities Log
					</Card.Title>
					<Card.Body className="d-flex flex-column w-100">
						{/* Social icons */}
						<Row className="act-btn w-100 mt-4">
							<Card.Title>Social:</Card.Title>

							{activitiesList.map(activity => activity.type === "social" ?
								<Col 
									xs={6} sm={3} md={4} lg={2}
									className="p-0 align-items-center text-center"
									key={activity.name}
								>
									<Button className={`rounded-circle act-btn-social ${activities[activity.name] === true ? 'selected' : ''}`}>
										<FontAwesomeIcon
											icon={activity.icon}
											className="act-btn-icon"
											onClick={() => handleActivityChange(activity.name)}
										/>
									</Button>
									<Card.Text>{activity.name}</Card.Text>
								</Col>
							: null)}
						</Row>

						{/* Hobbies icons */}
						<Row className="act-btn w-100 mt-4">
							<Card.Title>Hobbies:</Card.Title>

							{activitiesList.map(activity => activity.type === "hobbies" ?
								<Col 
									xs={6} sm={3} md={4} lg={2}
									className="p-0 align-items-center text-center"
									key={activity.name}
								>
									<Button className="rounded-circle act-btn-hobbies">
										<FontAwesomeIcon
											icon={activity.icon}
											className="act-btn-icon"
											onClick={() => handleActivityChange(activity.name)}
										/>
									</Button>
									<Card.Text>{activity.name}</Card.Text>
								</Col>
							: null)}
						</Row>


						{/* Exercises icons */}
						<Row className="act-btn w-100 mt-4">
							<Card.Title>Exercises:</Card.Title>

							{activitiesList.map(activity => activity.type === "exercises" ?
								<Col 
									xs={6} sm={3} md={4} lg={2}
									className="p-0 align-items-center text-center"
									key={activity.name}
								>
									<Button className="rounded-circle act-btn-exercise">
										<FontAwesomeIcon
											icon={activity.icon}
											className="act-btn-icon"
											onClick={() => handleActivityChange(activity.name)}
										/>
									</Button>
									<Card.Text>{activity.name}</Card.Text>
								</Col>
							: null)}
						</Row>

						{/* Good Meals icons */}
						<Row className="act-btn w-100 mt-4">
							<Card.Title>Good Meals:</Card.Title>

							{activitiesList.map(activity => activity.type === "meal" ?
								<Col 
									xs={6} sm={3} md={4} lg={2}
									className="p-0 align-items-center text-center"
									key={activity.name}
								>
									<Button className="rounded-circle act-btn-meal">
										<FontAwesomeIcon
											icon={activity.icon}
											className="act-btn-icon"
											onClick={() => handleActivityChange(activity.name)}
										/>
									</Button>
									<Card.Text>{activity.name}</Card.Text>
								</Col>
							: null)}
						</Row>

					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
}

// For rating button color
// function getColor(index) {
// 	switch (index) {
// 		case 0:
// 			return "var(--lilac)";
// 		case 1:
// 			return "var(--azure)";
// 		case 2:
// 			return "var(--cerulean)";
// 		case 3:
// 			return "var(--turquoise)";
// 		case 4:
// 			return "var(--lime)";
// 		case 5:
// 			return "var(--chartreuse)";
// 		case 6:
// 			return "var(--orange)";
// 		case 7:
// 			return "var(--pastel)";
// 		case 8:
// 			return "var(--pink)";
// 		case 9:
// 			return "var(--coral)";
// 		default:
// 			return "var(--ruby)";
// 	}
// }

export default Logs;
