import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
	//data for skills
	const skillList = [
		{
			id: 'tools',
			title: 'Tools',
			icon: <FontAwesomeIcon icon={faTools} />,
			list1: [
				'Figma',
				'Sketch',
				'Git/GitHub',
				'Heroku',
				'Netlify',
				'NPM',
				'ZSH',
				'MacOS',
				'Linux',
				'VSCode',
				'BBEdit',
				'Nova'
			]
		},
		{
			id: 'tech',
			title: 'Technologies',
			icon: <FontAwesomeIcon icon={faCode} />,
			list1: [
				'HTML',
				'CSS',
				'JavaScript',
				'jQuery',
				'Express',
				'React',
				'Handlebars',
				'Node.js',
				'MongoDB',
				'Bootstrap',
				'Tailwind',
				'MaterialUI',
				'UIKit'
			]
		}
	];

	return (
		<div className="sm:flex max-w-5xl	mx-auto my-12 text-gray-600">
			{skillList.map(skills => (
				<div className="flex-grow p-3 m-4" key={skills.id}>
					<div className="text-center text-4xl m-3">{skills.icon}</div>

					<h3 className="text-center text-xl">{skills.title}</h3>

					<div className="flex flex-wrap justify-center m-2 mx-auto w-full">
						{skills.list1.map(listItem => (
							<div
								key={Math.random()}
								className="m-2 p-1 shadow rounded-full text-center"
							>
								<span className="mx-1 max-w-max">{listItem}</span>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Skills;
