import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Header from '../Header/Herader';
import Img from '../../static/img/food2.jpg';
import './restaurants.css';
import {SimpleCard} from '../Cards/Cards';

class Restaurants extends Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurants: {}
		}
	}

	render() {
		return (
			<Grid className="restaurants">
				<Row>
					<Header>
						<div>
							<img className="header--bg" src={Img} />
							<p className="header--title">Restaurantes</p>
						</div>
					</Header>
					<SimpleCard isContainer>
						<ul>
							<li>fdsafasd</li>
						</ul>
					</SimpleCard>
				</Row>
			</Grid>
		);
	}
}

export default Restaurants;