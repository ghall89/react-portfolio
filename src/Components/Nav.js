import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faBriefcase,
	faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import * as Scroll from 'react-scroll';
import {
	Link,
	Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller
} from 'react-scroll';

const Nav = () => {
	const links = [
		{
			icon: <FontAwesomeIcon icon={faUser} />,
			link: '#home'
		},
		{
			icon: <FontAwesomeIcon icon={faBriefcase} />,
			link: '#portfolio'
		},
		{
			icon: <FontAwesomeIcon icon={faEnvelope} />,
			link: '#contact'
		}
	];

	return (
		<div className="fixed left-0 top-1/3 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md text-white text-lg shadow-lg rounded-r z-50">
			<ul>
				{links.map(link => (
					<li className="m-3 mix-blend-luminosity">
						<Link to={link.link}>{link.icon}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Nav;
