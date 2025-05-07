//App.js
import React from 'react';
import {
	BrowserRouter as Router,
	Routes, Route,
	Link
} from 'react-router-dom';
import Students from './components/Students';
import './App.css'

const App = () => {
	const isLinkActive =
		(path) =>
			window.location.pathname === path;
	return (
		<Router>
			<div className="container">
				<h1 style={{ color: "green" }}>
					Students Managment App
				</h1>
				<nav>
					<ul>
					<li className={
							isLinkActive('/students') ?
								'active' : ''}>
							<Link to="/students">
								Home
							</Link>
						</li>

						<li className={
							isLinkActive('/students') ?
								'active' : ''}>
							<Link to="/students">
								Students
							</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/students"
						element={<Students />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
