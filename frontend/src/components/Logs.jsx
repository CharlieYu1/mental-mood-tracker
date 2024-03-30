import React, { useState } from "react";
import { Container, Row, Card, Button, Col, Form } from "react-bootstrap";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { makeStyles } from "@mui/styles";

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
								<Button key={index} style={{ backgroundColor: getColor(index) }}>
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
							/>
						</Form.Group>
					</Card.Body>
				</Card>
			</Row>

			<Row className="d-md-flex flex-md-equal my-3 mood-row">
				<Card className="shadow-sm h-100 px-3 pt-3 pb-1 align-items-center">
					<Card.Title className="dashboard-card-title log-title">
						Sleeping Log
					</Card.Title>

					<Card.Body className="w-100">
						<Container className="d-flex w-100 justify-content-center">
						<Row className="w-100">
							<Col xs={12} md={4}>
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<DemoContainer components={["TimePicker"]}>
										<DemoItem label="Time Went to Bed">
											<TimePicker defaultValue={todayStartOfTheDay} disablePast />
										</DemoItem>
									</DemoContainer>
								</LocalizationProvider>
							</Col>
							<Col xs={12} md={4}>
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<DemoContainer components={["TimePicker"]}>
										<DemoItem label="Time Woke up">
											<TimePicker defaultValue={todayStartOfTheDay} disablePast />
										</DemoItem>
									</DemoContainer>
								</LocalizationProvider>
							</Col>
							<Col xs={12} md={4}>
								<div>Duration: hr</div>
							</Col>
						</Row></Container>
					</Card.Body>

					<Card.Body className="w-100">
						<Form.Group className="w-100">
							{/* <Form.Label>Example textarea</Form.Label> */}
							<Form.Control as="textarea" rows={3} placeholder="Note... (Optional)" />
						</Form.Group>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
}

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
