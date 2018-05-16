import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import './header.css';

const Header = (props) => {
	return(
		<Grid className="header">
			<Row>
				<Col>
					{props.children}
				</Col>
			</Row>
		</Grid>
	);
}

export default Header;