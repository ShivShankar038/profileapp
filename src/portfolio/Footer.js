import React from 'react';
import './FooterStyle.css';

class Footer extends React.Component {
	
	render() {
		return (
            <footer>
                <div className="social-media">
				<a href="https://www.facebook.com/shiv.shankar.315865"><i className="fa fa-facebook fa-lg"></i></a>
				<a href="https://twitter.com/ShivSha37178968/"><i className="fa fa-twitter fa-lg"></i></a>
				<a href="https://www.instagram.com/shivshankar038/"><i className="fa fa-instagram fa-lg"></i></a>
				<a href="https://in.pinterest.com/shivshankar038/"><i className="fa fa-pinterest-p fa-lg"></i></a>
			</div>
			<div className="address">
				<h3>Address:</h3>
				<p><i className="fa fa-map-pin fa-lg"></i> &nbsp;&nbsp;&nbsp;&nbsp;<b>Himalaya Pride,</b> GH-10B, Techzone 4, Greater Noida Uttar Pradesh 201308</p>
				<p><i className="fa fa-envelope fa-lg"></i> &nbsp;&nbsp;<b>Email-</b> shivshankar038@gmail.com</p>
				<p><i className="fa fa-phone fa-lg"></i> &nbsp;&nbsp;&nbsp;<b>phone No-</b> 9555932566</p>
			</div>
            </footer>
		)
	}
}

export default Footer;