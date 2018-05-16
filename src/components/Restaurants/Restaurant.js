import React from 'react';
import {Row, Col} from 'react-flexbox-grid';

class Restaurant extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}

	getRatingElements = (rating) => {
		let elements = [];
		for(let i=1;i<=rating;i++){
			elements.push(i);
		}
		return elements;
	}

	handleClick = () => {
		this.setState({
			open:!this.state.open
		})
	}

	render() {
		return(
			<Col xs={12} onClick={this.handleClick}>
				<Row className={`restaurant list-item ${this.state.open ? 'opened':'closed'}`}>
					<Col xs={1} >
						<svg style={{"width":"24px","height":"24px"}} viewBox="0 0 24 24">
							<path fill="rgba(44, 44, 44)" d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z" /> />
						</svg>
					</Col>
					<Col xs={8} className="restaurant--name">
						{this.props.restaurant.name}
					</Col>
					<Col xs={3}>
						{
							this.getRatingElements(this.props.restaurant.rating).map(() =>
								<svg style={{"width":"24px","height":"24px"}} viewBox="0 0 24 24">
									<path fill="rgba(44, 44, 44)" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
								</svg>
							)
						}
					</Col>
					<Col xs={12} className="details">
						<Row center="xs">
							<Col xs={6} className="row center-xs">
								<Col xs={1}>
									<svg style={{"width":"24px","height":"24px"}} viewBox="0 0 24 24">
										<path fill="rgba(44, 44, 44)" d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z" />
									</svg>
								</Col>
								<Col xs={5}>
									<p className="sub">Contact</p>
								</Col>
								<Col xs={12}>
									<p>Site: <a href={this.props.restaurant.contact.site}>{this.props.restaurant.contact.site}</a></p>
									<p>Email: <a href={"mailto:"+this.props.restaurant.contact.email}>{this.props.restaurant.contact.email}</a></p>
									<p>Phone: <a>{this.props.restaurant.contact.phone}</a></p>
								</Col>
							</Col>
							<Col xs={6} className="row center-xs">
								<Col xs={1}>
									<svg style={{"width":"24px","height":"24px"}} viewBox="0 0 24 24">
										<path fill="rgba(44, 44, 44)" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
									</svg>
								</Col>
								<Col xs={5}>
								<p className="sub">Address</p>
								</Col>
								<Col xs={12}>
									<p>Street: <a>{this.props.restaurant.address.street}</a></p>
									<p>City: <a>{this.props.restaurant.address.city}</a></p>
									<p>State: <a>{this.props.restaurant.address.state}</a></p>
								</Col>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		);
	}
}

export default Restaurant;