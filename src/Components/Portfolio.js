import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { Slide } from 'react-slideshow-image';

import portfolio from '../db/portfolio.json';

const Portfolio = () => {
	const fadeProperties = {
		duration: 3000,
		pauseOnHover: true,
		canSwipe: true,
		prevArrow: (
			<FontAwesomeIcon
				className="text-white"
				style={{ width: '30px', marginRight: '-30px' }}
				icon={faAngleLeft}
			/>
		),
		nextArrow: (
			<FontAwesomeIcon
				className="text-white"
				style={{ width: '30px', marginLeft: '-30px' }}
				icon={faAngleRight}
			/>
		)
	};

	return (
		<div className="p-6 max-w-7xl mx-auto">
			<h3 className="text-center text-3xl mb-3">Stuff I Made</h3>
			<div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-500 to-purple-400 rounded-md overflow-hidden shadow-md slide-container">
				<Slide {...fadeProperties}>
					{portfolio.map(data => (
						<div className="md:flex">
							<div className="flex-1">
								<img src={data.img} alt="" />
							</div>
							<div className="flex-1 text-white relative h-64 md:h-auto">
								<h4 className="text-center text-xl m-4">{data.title}</h4>
								<p className="m-4">{data.description}</p>
								<p className="m-4">Tools: {data.tags.join(', ')}</p>
								<div className="absolute bottom-5 flex px-3 space-x-3 w-full text-center">
									<a
										href={data.url}
										target="_blank"
										rel="noreferrer"
										className="text-white border-2 border-white p-2 rounded-md flex-1 transition-colors hover:text-blue-500 hover:bg-white"
									>
										<span className="ml-3">Visit Page</span>
									</a>
									<a
										href={data.github}
										target="_blank"
										rel="noreferrer"
										className="text-white border-2 border-white p-2 rounded-md flex-1 transition-colors hover:text-blue-500 hover:bg-white"
									>
										<span className="ml-3">GitHub</span>
									</a>
								</div>
							</div>
						</div>
					))}
				</Slide>
			</div>
		</div>
	);
};

export default Portfolio;
