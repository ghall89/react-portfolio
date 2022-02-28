import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Button = () => {
	// data for links
	const links = [
		{
			id: 1,
			name: 'Resumé',
			url: './docs/graham_hall_resume.pdf',
			icon: <FontAwesomeIcon icon={faFilePdf} />
		},
		{
			id: 2,
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/ghalldev/',
			icon: <FontAwesomeIcon icon={faLinkedin} />
		},
		{
			id: 3,
			name: 'GitHub',
			url: 'https://github.com/ghall89',
			icon: <FontAwesomeIcon icon={faGithub} />
		}
	];

	return (
		<div className="flex text-center max-w-5xl mx-auto my-10 flex-wrap space-y-3 md:space-x-3 md:space-y-0">
			{links.map(link => (
				<a
					key={link.id}
					href={link.url}
					target="_blank"
					rel="noreferrer"
					className="p-2 rounded-md flex-grow text-blue-500 bg-white shadow min-w-full md:min-w-0 transition-transform transform hover:-translate-y-0.5 hover:shadow-md"
				>
					{link.icon}
					<span className="ml-3">{link.name}</span>
				</a>
			))}
		</div>
	);
};

export default Button;
