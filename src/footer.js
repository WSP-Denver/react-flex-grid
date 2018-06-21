import React, { Component } from "react";

class Footer extends Component {
	render() {
    var listStyles = {
      textTransform: "uppercase",
      letterSpacing: 1,
      color: "#f5cfe2",
      fontWeight: "700",
      paddingBottom: 4
    }
		var elevatorBtnStyles = {
			display: "block",
			position: "fixed",
			bottom: 16,
			right: 16,
			padding: 16,
			width: "auto",
			height: 20,
			borderRadius: 5,
			fontSize: 12,
			color: "#9c9c9c",
			letterSpacing: 1,
			lineHeight: "20px",
			fontWeight: "700",
			textTransform: "uppercase",
			textDecoration: "none",
			textAlign: "center",
			backgroundColor: "#fff"
		}
		return (
			<footer>
				<div className="footer-inner">
					<ul>
						<li style={listStyles} >References
							<p>Want to learn React? Check out Kirupa's guide - it's a great start to learning React!:&nbsp;
								<a href="https://www.kirupa.com/react/" target="_blank" rel="noopener noreferrer" >
									Read Kirupa's React Guide
								</a>
							</p>
						</li>
					</ul>
				</div>
				<a href="#top" className="elevator-button" style={elevatorBtnStyles} >Top</a>
			</footer>
		);
	}
}

export default Footer;
