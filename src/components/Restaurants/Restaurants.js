import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Header from '../Header/Herader';
import Img from '../../static/img/food2.jpg';
import './restaurants.css';
import {SimpleCard} from '../Cards/Cards';
import {AxiosProvider, Get} from 'react-axios';

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

							<Get url="https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json">
								{(error, response, isLoading, onReload) => {
									if(error) {
										return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Volver a intentar</button></div>);
									} else if(isLoading) {
										return (<div>Cargando...</div>);
									} else if(response !== null) {
										console.log(response.data);
										return(<Col xs={12}>fda</Col>);
									}
									return(<div>Cargando...</div>);
								}}
							</Get>
						</ul>
					</SimpleCard>
				</Row>
			</Grid>
		);
	}
}

export default Restaurants;