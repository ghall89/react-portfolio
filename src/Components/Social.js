import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Button = () => {
	const links = [
		{
			name: 'Resumé',
			url: '#',
			icon: <FontAwesomeIcon icon={faFilePdf} />
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/ghalldev/',
			icon: <FontAwesomeIcon icon={faLinkedin} />
		},
		{
			name: 'GitHub',
			url: 'https://github.com/ghall89',
			icon: <FontAwesomeIcon icon={faGithub} />
		}
	];

	return (
		<div class="flex text-center max-w-5xl mx-auto">
			{links.map(link => (
				<a
					href={link.url}
					target="_blank"
					class="bg-white p-2 m-4 rounded-md shadow-md flex-grow"
				>
					{link.icon}
					<span className="ml-3">{link.name}</span>
				</a>
			))}
		</div>
	);
};

export default Button;
