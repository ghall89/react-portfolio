import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
	//data for skills
	const skillList = [
		{
			title: 'Tools',
			icon: <FontAwesomeIcon icon={faTools} />,
			list1: ['Figma', 'Sketch', 'Git/GitHub', 'Heroku', 'NPM', 'ZSH', 'iTerm'],
			list2: ['MacOS', 'Linux', 'Visual Studio Code', 'BBEdit', 'Nova']
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
		<div className="sm:flex">
			{skillList.map(skills => (
				<div class="bg-gray-100 flex-grow rounded-md p-3 m-4 ">
					<div className="text-center text-4xl m-3">{skills.icon}</div>

					<h3 class="text-center text-xl">{skills.title}</h3>

					<div className="flex m-2">
						<ul class="flex-grow">
							{skills.list1.map(listItem => (
								<li class="m-2">- {listItem}</li>
							))}
						</ul>
						<ul class="flex-grow">
							{skills.list2.map(listItem => (
								<li class="m-2">- {listItem}</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default Skills;
