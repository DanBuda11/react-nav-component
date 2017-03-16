// Import stylesheet for Webpack to include it in the build
import './../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// Import the main app component
import TinyNav from './app';


const navStyles = {
	navContainer: {
		overflow: 'hidden',
		backgroundColor: '#000000'
	},
	logoSrc: 'http://www.fillmurray.com/50/50',
	logo: {
		float: 'left',
		padding: '0.5em',
		height: '4em'
	},
	breakpoint: '480px'
};

const nav = (
	<div 
		className="navContainer"
		style={navStyles.navContainer}>
		<img 
			className="logo"
			src={navStyles.logoSrc}
			style={navStyles.logo}></img>
		<TinyNav 
			breakpoint={navStyles.breakpoint}
		>
			<a href="#">Home</a>
			<a href="#">Blog</a>
			<a href="#">Projects</a>
		</TinyNav>
	</div>
);

ReactDOM.render(nav, document.getElementById('app'));