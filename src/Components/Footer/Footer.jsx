import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

import './Style.css'

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<FaHome size={ 20 } style={{color: "#fff" , marginRight:"2rem"}}/>
						<section>
							<p>JK Lakshmipat University</p>
							<p>Jaipur</p>
						</section>
					</div>
					<div className="phone">
						<h4>
							<FaPhone size={ 20 } style={{color : "#fff" , marginRight:"2rem"}}/>
							+918279287644
						</h4>
					</div>
					<div className="email">
						<h4>
							<FaMailBulk size={ 20 } style={{color: "#fff" , marginRight:"2rem"}} />
							parthchoudhary@jklu.edu.in
						</h4>
					</div>
				</div>
				<div className="right">
					<h4>About myself</h4>
					<p>A dedicated Computer Applications student, I am fascinated by the idea of the
Internet and how it opens the endless doors of innovation. I am a thorough
researcher with a penchant for detail and characterized by my ability to work hard
and think creatively. I am a team player and bring forward immense dedication and
patience.</p>
					
				</div>
			</div>
		</div>
	)
}

export default Footer
