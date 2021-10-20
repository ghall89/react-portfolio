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

	return (
		<>
			<div className="fixed flex flex-wrap items-center left-0 top-0 h-full w-12 bg-gray-100 text-2xl shadow-xl z-50 invisible md:visible">
				<div className="flex flex-wrap space-y-1.5">
					{links.map(link => (
						<Link
							className="p-3 min-w-full text-blue-400 hover:text-white hover:bg-blue-500"
							key={Math.random()}
							to={link.id}
							spy={true}
							smooth={true}
							offset={link.offset}
							duration={500}
						>
							<span>{link.icon}</span>
						</Link>
					))}
				</div>
			</div>
			<div className="fixed flex flex-wrap justify-around bottom-0 left-0 h-16 w-full bg-gray-100 text-4xl shadow-xl z-50 visible md:invisible">
				{links.map(link => (
					<Link
						className="p-3 text-blue-400 hover:text-blue-500"
						key={Math.random()}
						to={link.id}
						spy={true}
						smooth={true}
						offset={link.offset}
						duration={500}
					>
						<span>{link.icon}</span>
					</Link>
				))}
			</div>
		</>
	);
};

export default Nav;
