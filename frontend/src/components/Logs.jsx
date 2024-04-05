import React, { useState } from "react";
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

// const useStyles = makeStyles({
// 	root: {
// 		"& .MuiOutlinedInput-notchedOutline": {
// 			borderColor: "yellow",
// 		},
// 		"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
// 			borderColor: "yellow",
// 		},
// 	},
// });

import icon1 from "/assets/images/mood-icon-01.png";
import icon10 from "/assets/images/mood-icon-05.png";

function Logs() {
	// Initialize state for the current date
	const [currentDate, setCurrentDate] = useState(dayjs());

	// Initialize state for log items
	const [mood, setMood] = useState(null);
	const [moodRemarks, setMoodRemarks] = useState("")

	// handlers for log items
	const handleMoodChange = (mood) => {
		setMood(mood);
		// console.log(mood)
	}

	const handleMoodRemarksChange = event => {
		setMoodRemarks(event.target.value);
		// console.log(moodRemarks)
	}

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
						<div className="d-flex flex-wrap log-btn">
							<img src={icon1} className="icon-img" alt="Image 1" />
							{[...Array(10)].map((_, index) => (
								<Button key={index} style={{ backgroundColor: getColor(index) }} onClick={() => handleMoodChange(index + 1)}>
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
													disablePast
													// slotProps={{
													// 	textField: {
													// 		sx: {
													// 			"& .MuiOutlinedInput-root": {
													// 				width: 150,
													// 			},
													// 		},
													// 	},
													// }}
												/>
											</DemoItem>
										</DemoContainer>
									</LocalizationProvider>
								</Col>

								<Col xs={12} md={6} lg={4}>
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DemoContainer components={["TimePicker"]}>
											<DemoItem label="Time Woke up">
												<TimePicker defaultValue={todayStartOfTheDay} disablePast />
											</DemoItem>
										</DemoContainer>
									</LocalizationProvider>
								</Col>
								<Col xs={12} md={12} lg={4}>
									<div>Duration: hr</div>
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
								<Button className="quality-btn-5">Excellent</Button>
							</Col>
							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="align-items-center text-center px-0"
							>
								<Button className="quality-btn-4">Good</Button>
							</Col>
							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="align-items-center text-center px-0"
							>
								<Button className="quality-btn-3">Fair</Button>
							</Col>
							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="align-items-center text-center px-0"
							>
								<Button className="quality-btn-2">Poor</Button>
							</Col>
							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="align-items-center text-center px-0"
							>
								<Button className="quality-btn-1">Very Poor</Button>
							</Col>
						</Row>
					</Card.Body>

					<Card.Body className="w-100">
						<Form.Group className="w-100">
							<Form.Control as="textarea" rows={3} placeholder="Note... (Optional)" />
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
						<Row className="act-btn w-100">
							<Card.Title>Social:</Card.Title>
							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-social">
									<FontAwesomeIcon
										icon={faHouseChimneyWindow}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Family Time</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-social">
									<FontAwesomeIcon
										icon={faUserGroup}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Friend Hangout</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-social">
									<FontAwesomeIcon
										icon={faHeart}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Date</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-social">
									<FontAwesomeIcon
										icon={faComment}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Social Events</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-social">
									<FontAwesomeIcon
										icon={faComputer}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Socializing Online</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-social">
									<FontAwesomeIcon
										icon={faFaceSmile}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Others</Card.Text>
							</Col>
						</Row>

						{/* Hobbies icons */}
						<Row className="act-btn w-100 mt-4">
							<Card.Title>Hobbies:</Card.Title>
							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-hobbies">
									<FontAwesomeIcon
										icon={faPalette}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Arts/ Music</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-hobbies">
									<FontAwesomeIcon
										icon={faVolleyball}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Sports</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-hobbies">
									<FontAwesomeIcon
										icon={faScrewdriverWrench}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>DIY</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-hobbies">
									<FontAwesomeIcon
										icon={faGraduationCap}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Learning</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-hobbies">
									<FontAwesomeIcon
										icon={faPersonWalkingLuggage}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Travel</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-hobbies">
									<FontAwesomeIcon
										icon={faFaceSmile}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Others</Card.Text>
							</Col>
						</Row>

						{/* Exercises icons */}
						<Row className="act-btn w-100 mt-4">
							<Card.Title>Exercises:</Card.Title>
							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-exercise">
									<FontAwesomeIcon
										icon={faPersonRunning}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Jogging</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-exercise">
									<FontAwesomeIcon
										icon={faDumbbell}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Gym</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-exercise">
									<FontAwesomeIcon
										icon={faSpa}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Yoga</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-exercise">
									<FontAwesomeIcon
										icon={faPersonBiking}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Cycling</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-exercise">
									<FontAwesomeIcon
										icon={faPersonWalking}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Walking</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-exercise">
									<FontAwesomeIcon
										icon={faFaceSmile}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Others</Card.Text>
							</Col>
						</Row>

						{/* Good Meals icons */}
						<Row className="act-btn w-100 mt-4">
							<Card.Title>Good Meals:</Card.Title>
							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-meal">
									<FontAwesomeIcon
										icon={faMugSaucer}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Breakfast</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-meal">
									<FontAwesomeIcon
										icon={faUtensils}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Lunch</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-meal">
									<FontAwesomeIcon
										icon={faBellConcierge}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Dinner</Card.Text>
							</Col>

							<Col
								xs={6}
								sm={3}
								md={4}
								lg={2}
								className="p-0 align-items-center text-center"
							>
								<Button className="rounded-circle act-btn-meal">
									<FontAwesomeIcon
										icon={faFaceSmile}
										className="act-btn-icon"
										onClick={goToNextMonth}
									/>
								</Button>
								<Card.Text>Others</Card.Text>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
}

// For rating button color
function getColor(index) {
	switch (index) {
		case 0:
			return "var(--lilac)";
		case 1:
			return "var(--azure)";
		case 2:
			return "var(--cerulean)";
		case 3:
			return "var(--turquoise)";
		case 4:
			return "var(--lime)";
		case 5:
			return "var(--chartreuse)";
		case 6:
			return "var(--orange)";
		case 7:
			return "var(--pastel)";
		case 8:
			return "var(--pink)";
		case 9:
			return "var(--coral)";
		default:
			return "var(--ruby)";
	}
}

export default Logs;
