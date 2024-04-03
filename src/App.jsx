import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChoachesComponent from "./components/choache/ChoachesComponent";
import HomePage from './components/HomePage';

function App() {
  return (
		<Router>
			<div className="">
				<Navbar />
				<Routes>
          <Route exact path="/" element={<HomePage />} />
					<Route
						exact
						path="/book_by_trainer"
						element={<ChoachesComponent />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
