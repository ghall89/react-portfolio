import { useEffect } from 'react';
import { Link, scroller } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faBriefcase,
	faEnvelope
} from '@fortawesome/free-solid-svg-icons';

// nav links
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

	// detect keyboard input and scroll to section
	useEffect(() => {
		function handleKeyDown(e) {
			// if '1' or 'a' is pressed, scroll to about section
			if (e.keyCode === 49 || e.keyCode === 65) {
				scroller.scrollTo('about', {
					smooth: true,
					offset: -140,
					duration: 500
				});
				// if '2' or 'p' is pressed, scroll to portfolio section
			} else if (e.keyCode === 50 || e.keyCode === 80) {
				scroller.scrollTo('portfolio', {
					smooth: true,
					offset: 0,
					duration: 500
				});
				// if '3' or 'c' is pressed, scroll to contact section
			} else if (e.keyCode === 51 || e.keyCode === 67) {
				scroller.scrollTo('contact', {
					smooth: true,
					offset: 0,
					duration: 500
				});
			}
		}

		document.addEventListener('keydown', handleKeyDown);

		// event clean up
		return function cleanup() {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<>
			{/* sidebar for desktop view */}
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
			{/* bottom bar for mobile view */}
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
