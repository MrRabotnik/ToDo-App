import React from 'react';
import logo from './logo.svg';
import './App.css';

function Heading(){
	return (
		<h1>Heading</h1>
	);
}

function Paragraph(){
	return (
		<p>Paragraph</p>
	);
}

function Footer(){
	return(
		<h3>Footer</h3>
	);	
}

function App() {
	return (
		<div>
			<Heading />
			<Paragraph />
			<Footer />
		</div>
	);
}

export default App;
