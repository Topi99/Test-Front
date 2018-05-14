import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import './banner.css';

let Banner = (props) => {
	return(
		<Grid fluid className="banner playfair">
			<Row>
				<div className="banner--main-txt-left white">
					Encuentra los mejores restaurantes.
				</div>
			</Row>
		</Grid>
	);
};

export default Banner;