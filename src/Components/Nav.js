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
			id: 'about',
			offset: -140
		},
		{
			icon: <FontAwesomeIcon icon={faBriefcase} />,
			id: 'portfolio',
			offset: 0
		},
		{
			icon: <FontAwesomeIcon icon={faEnvelope} />,
			id: 'contact',
			offset: 0
		}
	];

	const scroll = id => {
		console.log(id);
	};

	return (
		<div className="fixed flex items-center left-0 top-0 h-full bg-gray-100 text-2xl shadow-xl z-50 invisible md:visible">
			<ul className="my-auto">
				{links.map(link => (
					<li
						className="p-3 text-blue-400 hover:text-white hover:bg-blue-600"
						key={Math.random()}
					>
						<Link
							to={link.id}
							spy={true}
							smooth={true}
							offset={link.offset}
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
