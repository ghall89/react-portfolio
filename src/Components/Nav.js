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
			id: '#home'
		},
		{
			icon: <FontAwesomeIcon icon={faBriefcase} />,
			id: '#portfolio'
		},
		{
			icon: <FontAwesomeIcon icon={faEnvelope} />,
			id: '#contact'
		}
	];

	const scroll = id => {
		console.log(id);
	};

	return (
		<div className="fixed left-0 top-1/3 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md text-white text-lg shadow-lg rounded-r z-50">
			<ul>
				{links.map(link => (
					<li className="m-3 mix-blend-luminosity" key={Math.random()}>
						<a href={link.id}>{link.icon}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Nav;
