import React from 'react';
import { Switch, NavLink, Route  } from 'react-router-dom';

import './font-awesome.css';
import './PortfolioStyle.css';
import './ModalStyle.css';
import Alldesign from './Alldesign';
import Logodesign from './Logodesign';
import Webdesign from './Webdesign';
import Printdesign from './Printdesign';
import Footer from './Footer';

class Portfolio extends React.Component {

	render() {

		return (
			<div className="container">

				<header>
					<h1>My Portfolio</h1>
				</header>
				<nav id="filter">
					<NavLink activeClassName="active"  to="/Alldesign">All Design</NavLink>
					<NavLink activeClassName="active" to="/Logodesign">Logo Design</NavLink>
					<NavLink activeClassName="active" to="/Webdesign">Web Design</NavLink>
					<NavLink activeClassName="active" to="/Printdesign">Print Design</NavLink>
				</nav>

				<section id="container">
					<Switch>
						<Route path="/" exact component={Alldesign} />
						<Route path="/Alldesign" component={Alldesign} />
						<Route path="/Logodesign" component={Logodesign} />
						<Route path="/Webdesign" component={Webdesign} />
						<Route path="/Printdesign" component={Printdesign} />
					</Switch>
				</section>
				<Footer />
			</div>
		)
	}
}

export default Portfolio;