import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {NavLink} from 'react-router-dom';
import './navigation.css';

const Navigation = (props) => {
	return(
		<Grid fluid className="navigation ">
			<Row>
				<Col sm={3} className="navigation--title">Melp</Col>
				<Col smOffset={5} sm={1}><span><NavLink to="/">Inicio</NavLink></span></Col>
				<Col sm={1}><span><NavLink to="/restaurants">Restaurantes</NavLink></span></Col>
				<Col sm={1}><span><NavLink to="/map">Mapa</NavLink></span></Col>
			</Row>
		</Grid>
	);
}

export default Navigation;