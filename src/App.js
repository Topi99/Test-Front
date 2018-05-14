import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation/>
				<Banner/>
			</div>
		);
	}
}

export default App;
