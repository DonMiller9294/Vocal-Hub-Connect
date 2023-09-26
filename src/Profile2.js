import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Profile2() {
	return (
		<div className="joblisting1">
			<Card>
				<Card.Header as="h5">Entry level Sales Associate</Card.Header>
				<Card.Body>
					<Card.Title className="company">West Way Roofing</Card.Title>
					<div className="highlight">
						<Card.Text>
							<i>4.3 Review</i>
						</Card.Text>
						<Card.Text>
							<i className="bonus">Bonus</i>
							<i className="retirment">401K</i>
							<br />
							<i className="salary">$45000 a year</i>
						</Card.Text>
					</div>
					<Card.Text className="review">
						<b>Los Angeles, CA</b>
					</Card.Text>
					<Button variant="dark">Apply</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Profile2;
