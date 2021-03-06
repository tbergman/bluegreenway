import React from 'react';
import socialMediaLinks from '../../static/socialMediaLinks.json';

/**
 * Footer block at bottom of site, with misc links and current weather/tide conditions
 */
export default (props) => (
	<footer className='site-footer'>
		<div className="site-footer-container">
			<div className="site-footer-row row">
				<div className="site-footer-column">
					<div className="site-footer-advocate">The Blue Greenway is advocated by:</div>
					<a href="http://sfparksalliance.org" className="site-footer-sfpa-logo"></a>
					<div className='menu-social-media'>
						<div className='menu-social-media-buttons'>
							<a href={ socialMediaLinks.facebook } className='menu-social-media-button menu-social-media-facebook'></a>
							<a href={ socialMediaLinks.twitter } className='menu-social-media-button menu-social-media-twitter'></a>
							<a href={ socialMediaLinks.instagram } className='menu-social-media-button menu-social-media-instagram'></a>
						</div>
					</div>
				</div>
				<div className="site-footer-column">
					<div className="site-footer-header">About</div>
					<p><a href="http://www.sfparksalliance.org/our-work/blue-greenway">The Blue Greenway</a></p>
					<p><a href="http://www.sfparksalliance.org/">San Francisco Parks Alliance</a></p>
				</div>
				<div className="site-footer-column">
					<div className="site-footer-header">Contact</div>
					<p>415.621.3260</p>
					<p><a href="mailto:feedback@sfparksalliance.org">feedback@sfparksalliance.org</a></p>
					<p>1663 Mission St, Suite 320<br />San Francisco, CA 94103</p>
				</div>
				{/*
				<div className="site-footer-column">
					Weather
				</div>
				*/}
			</div>
		</div>
	</footer>
);
