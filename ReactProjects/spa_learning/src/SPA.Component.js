import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import locations from './locations';

class SPAComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loc: [],
			nextPage : {},
			path: '',
			component: ''
		}
		this.nextClick = this.nextClick.bind(this);	
	}

	componentDidMount() {
		let currentLocations = locations.slice();
		const next = currentLocations.pop();
		const {
			path: pagePath = '',
			component: pageComponent = ''
		} = next;
		this.setState({
			loc: currentLocations,
			nextPage: next,
			path: pagePath,
			component: pageComponent
		});
	}

	routing(path='', component='') {
		if (path === '' && component === '') {
			return (
				"Won't show you.....Try more"
			);
		}
		return (
			<div className="routed-from-routing">
				<Route exact to={path} component={component} />
			</div>
		);
	}

	nextClick () {
		const {
			loc: midLoc = []
		} = this.state;
		
		if (midLoc.length > 0) {
			let currentLocations = midLoc.slice();
			const next = currentLocations.pop();
			const {
				path: pagePath = '',
				component: pageComponent = ''
			} = next;

			this.setState({
				loc: currentLocations,
				nextPage: next,
				path: pagePath,
				component: pageComponent
			});
		}
	}

	render() {
		const path=this.state.path;
		const component=this.state.component;

		return (
			<div className="page-content">
				<HashRouter>
					{this.routing(path, component)}
				</HashRouter>
				<button
					className="button"
					onClick={() => {this.nextClick()}}
				>
				NEXT
				</button>
			</div>
		);
	}
}

export default SPAComponent;