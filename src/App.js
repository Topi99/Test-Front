import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing';
import Restaurants from './components/Restaurants/Restaurants';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navigation/>
					<Route exact path="/" component={Landing} />
					<Route exact path="/Test-Front/" component={Landing} />
					<Route path="/restaurants" component={Restaurants} />
				</div>
			</Router>
		);
	}
}

export default App;
