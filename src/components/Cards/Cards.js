import React from 'react';
import {Grid, Row} from 'react-flexbox-grid';
import './cards.css';

export class SimpleCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			style: {}
		}
	}

	componentWillMount = () => {
		if(this.props.isContainer) {
			this.setState({style:{
				'position':'absolute',
				'zIndex':'1',
				'top':'35%',
				'left':'0',
				'right':'0',
				'margin':'auto'
			}});
		}
	}

	render() {
		return(
			<Grid className="simple-card" style={this.state.style}>
				<Row>
					{this.props.children}
				</Row>
			</Grid>
		);
	}
}