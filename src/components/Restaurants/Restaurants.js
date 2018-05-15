import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Header from '../Header/Herader';

class Restaurants extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<Header>Restaurants</Header>
				</Row>
			</Grid>
		);
	}
}

export default Restaurants;