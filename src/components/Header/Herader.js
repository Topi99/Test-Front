import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

const Header = (props) => {
	return(
		<Grid fluid>
			<Row>
				<Col>
					<h2>{props.children}</h2>
				</Col>
			</Row>
		</Grid>
	);
}

export default Header;