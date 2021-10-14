import { Link, animateScroll as scroll } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faBriefcase,
	faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
	const links = [
		{
			icon: <FontAwesomeIcon icon={faUser} />,
			id: 'about'
		},
		{
			icon: <FontAwesomeIcon icon={faBriefcase} />,
			id: 'portfolio'
		},
		{
			icon: <FontAwesomeIcon icon={faEnvelope} />,
			id: 'contact'
		}
	];

	const scroll = id => {
		console.log(id);
	};

	return (
		<div className="transition-transform duration-150 ease-in-out fixed left-0 top-1/3 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md text-white text-lg shadow-lg rounded-r z-50 transform -translate-x-11 md:-translate-x-0">
			<ul>
				{links.map(link => (
					<li className="m-3 mix-blend-luminosity" key={Math.random()}>
						<Link
							to={link.id}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							{link.icon}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Nav;
