import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

function TheNav() {
	return (
		<>
			<Navbar bg="light" data-bs-theme="light">
				<Container>
					<Nav className="me-auto">
						<Nav.Link>
							<img
								src="logo.png"
								width="30"
								height="30"
								className="brand"
								alt="notification"
							/>
						</Nav.Link>
						<Nav.Link>
							<img
								src="bell.png"
								width="30"
								height="30"
								className="notification"
								alt="notification"
							/>
						</Nav.Link>

						<Nav.Link href="#features">
							<img
								src="message.png"
								width="27"
								height="27"
								className="message"
								alt="React Bootstrap logo"
							/>
						</Nav.Link>
						<Nav.Link href="#features">
							<img
								src="hamburger.png"
								width="27"
								height="27"
								className="hamburger"
								alt="React Bootstrap logo"
							/>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
			<br />
		</>
	);
}

export default TheNav;
