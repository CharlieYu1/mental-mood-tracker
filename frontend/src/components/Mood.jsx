import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Mood() {
	const formattedDate = dayjs().format("MMMM/YYYY");

	return (
		<Container className="content">
			<Row>
				<Col className="text-center">
					<h2>
						<FontAwesomeIcon icon={faCaretLeft} className="mood-title-icon" />
						{formattedDate}
						<FontAwesomeIcon icon={faCaretRight} className="mood-title-icon" />
					</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card>
						<Card.Header>Featured</Card.Header>
						<Card.Body>
							<Card.Title>Special title treatment</Card.Title>
							<Card.Text>
								With supporting text below as a natural lead-in to additional content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Header>Featured</Card.Header>
						<Card.Body>
							<Card.Title>Special title treatment</Card.Title>
							<Card.Text>
								With supporting text below as a natural lead-in to additional content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default Mood;
