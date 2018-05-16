import React, {Component} from 'react';
import {Grid, Row} from 'react-flexbox-grid';
import Header from '../Header/Herader';
import Img from '../../static/img/food2.jpg';
import './restaurants.css';
import {SimpleCard} from '../Cards/Cards';
import axios from 'axios';
import Restautant from './Restaurant';

class Restaurants extends Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurants:[],
			sort: 'name'
		}
	}

	sortByName = (a,b) => {
		if(a.name<b.name) {
			return -1;
		}
		if(a.name>b.name) {
			return 1;
		}
		return 0;
	}

	sortByRating = (a,b) => {
		if(a.rating<b.rating) {
			return 1;
		}
		if(a.rating>b.rating) {
			return -1;
		}
		return 0;
	}

	async componentWillMount() {
		const get = await axios.get('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json');
		let data = []
		get.data.forEach(restaurant => {
			data.push(restaurant);
		});

		data.sort(this.sortByName);

		this.setState({
			restaurants:data
		})
		console.log(this.state.restaurants);
	}

	handleChange = (event) => {
		let data = this.state.restaurants;

		if(this.state.sort==='name') {
			data.sort(this.sortByRating);
		} else if(this.state.sort==='rating') {
			data.sort(this.sortByName);
		}

		this.setState({
			sort: this.state.sort === 'name' ? 'rating' : 'name'
		});
	}

	render() {
		return (
			<Grid className="restaurants">
				<Row>
					<Header>
						<div>
							<img className="header--bg" src={Img} alt="pizzaaa"/>
							<p className="header--title">Restaurantes</p>
						</div>
					</Header>
					<SimpleCard isContainer>
						<div className="col-xs-12 center-xs sort-bar">
							<p className="sub">
								Ordenar por:
								<select onChange={this.handleChange} value={this.state.sort}>
									<option value="name">Nombre</option>
									<option value="rating">Rating</option>
								</select>
							</p>
						</div>
						{
							this.state.restaurants.map(restaurant =>
								<Restautant restaurant={restaurant} key={restaurant.id}/>
							)
						}
					</SimpleCard>
				</Row>
			</Grid>
		);
	}
}

export default Restaurants;