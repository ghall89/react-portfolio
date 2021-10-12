import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
	//data for skills
	const skillList = [
		{
			title: 'Tools',
			icon: <FontAwesomeIcon icon={faTools} />,
			list1: ['Figma', 'Sketch', 'Git/GitHub', 'Heroku', 'NPM', 'ZSH', 'iTerm'],
			list2: ['MacOS', 'Linux', 'VSCode', 'BBEdit', 'Nova']
		},
		{
			title: 'Technologies',
			icon: <FontAwesomeIcon icon={faCode} />,
			list1: [
				'HTML',
				'CSS',
				'JavaScript',
				'jQuery',
				'Express',
				'React',
				'Handlebars'
			],
			list2: [
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
		<div className="sm:flex max-w-5xl	mx-auto">
			{skillList.map(skills => (
				<div className="flex-grow p-3 m-4 ">
					<div className="text-center text-4xl m-3">{skills.icon}</div>

					<h3 className="text-center text-xl">{skills.title}</h3>

					<div className="flex m-2 mx-auto w-full sm:w-1/2">
						<ul className="flex-grow text-right">
							{skills.list1.map(listItem => (
								<li className="m-2">{listItem}</li>
							))}
						</ul>
						<ul className="flex-grow">
							{skills.list2.map(listItem => (
								<li className="m-2">{listItem}</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default Skills;
