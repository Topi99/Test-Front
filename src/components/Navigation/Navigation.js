import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import './navigation.css';

class Navigation extends React.Component {
	render() {
		return(
			<Grid fluid className="navigation ">
				<Row>
					<Col sm={3} className="navigation--title">Melp</Col>
					<Col smOffset={5} sm={1}><span>Home</span></Col>
					<Col sm={1}><span>Restaurants</span></Col>
					<Col sm={1}><span>Map</span></Col>
				</Row>
			</Grid>
		);
	}
}

export default Navigation;