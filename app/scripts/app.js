// Notes:
	// Need to tell users to set body margin: 0 or find a way to put it into the component
	// Test everything in a CSS sheet then put it all back into the defaultProps
	// Create a className structure for everything in case a user wants to change more things
		// Make sure to provide good documentation for the entire structure
	// Give the user-added links a className when they go thru the cloneElement function?
	// className and props name should be the same (eg: navContainer, narrowLinks)
	// Do styles for the icon need to go somewhere other than in the defaultProp that creates the <img> tag?
	// WHen hit breakpoint, height of navbar changes very slightly
		// This should be fixed (at least using the current stored icon)
import React from 'react';
import icon from './icon';

export default React.createClass({
	getDefaultProps() {
		return {
			// All default styling goes here and will be overridden by
			// a user changing the defaults from the entry.js code
			breakpoint: 480,
			icon: <img className="toggleImg" style={{height: '4em', padding: '0.5em', float: 'right', cursor: 'pointer'}} src={icon} />,
			narrowChildren: {
				float: 'right',
				clear: 'both',
				textAlign: 'right'
			},
			narrowChild: {
				color: '#fff',
				textDecoration: 'none',
				display: 'block',
				fontSize: '1.3em',
				margin: '0.5em 0.5em 0.5em 0'
				// margin: '0.3em 0.3em 0.3em 0'
			},
			wideChildren: {
				float: 'right',
				lineHeight: '4.9em',
				margin: '0'
				// paddingRight: '0.5em'
			},
			wideChild: {
				// margin: '2em',
				color: '#fff',
				marginRight: '1.5em',
				color: '#fff',
				textDecoration: 'none',
				fontSize: '1.3em'
			}
		};
	},
	// This allows the dropdown menu to toggle on smaller screen sizes
	componentWillMount() {
		window.addEventListener('resize', this.updateWidth);
	},
	// This sets links on smaller screens initially to "off"
	// Also sets initial state of window width
	getInitialState() {
		return {
			linksVisible: false,
			width: window.innerWidth
		};
	},
	render() {
		// Adds props to the individual link elements on small screens
		const childrenWithPropsNarrow = React.Children.map(this.props.children, (child) => React.cloneElement(child, { style: this.props.narrowChild, className: 'narrowChild' }));
		// Adds props to the individual link elements on larger screens
		const childrenWithPropsWide = React.Children.map(this.props.children, (child) => React.cloneElement(child, { style: this.props.wideChild, className: 'wideChild' }));
		// Tests screen width against breakpoint setting to show or
		// not show the dropdown menu
		if(this.state.width < parseInt(this.props.breakpoint)) {
			let links = null;
			if(this.state.linksVisible) {
				links = (
					<div className="narrowChildren" style={this.props.narrowChildren}>
						{childrenWithPropsNarrow}
					</div>
				);
			}
			// Returns the dropdown icon with dropdown link menu
			// for smaller (mobile) screens
			return (
				<div className="toggleContainer" onClick={this.toggleChildren}>
					<div className="toggleDiv">{this.props.icon}</div>
					{links}
				</div>
			);
		}
		// Returns the links on larger screens
		return (
			<div className="wideChildren" style={this.props.wideChildren}>
				{childrenWithPropsWide}
			</div>
		);
	},
	// Shows/hides links when click on dropdown icon
	toggleChildren() {
		this.setState({
			linksVisible: !this.state.linksVisible
		});
	},
	// Changes state of screen width to know when to show dropdown
	updateWidth() {
		this.setState({
			width: window.innerWidth
		});
	}
});