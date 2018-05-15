import React from 'react';
import {Grid, Row} from 'react-flexbox-grid';
import './banner.css';

const Banner = (props) => {
	return(
		<Grid fluid className="banner playfair">
			<Row>
				<div className={`banner--main-txt-${props.txtSide}`}>
					{props.children}
				</div>
			</Row>
		</Grid>
	);
};

export default Banner;