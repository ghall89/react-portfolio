import { Slide } from 'react-slideshow-image';
import { useState } from 'react';

import portfolioData from '../data/portfolio.json';

const Portfolio = () => {
	const fadeProperties = {
		duration: 5000,
		transitionDuration: 500,
		pauseOnHover: true,
		indicators: true,
		arrows: false
	};

	const [portfolio, setPortfolio] = useState(portfolioData);

	return (
		<div className="slide-container">
			<Slide {...fadeProperties}>
				{portfolio.map(data => (
					<div
						className="md:flex bg-gradient-to-br from-blue-500 to-purple-400 shadow-inner"
						key={Math.random()}
					>
						<div className="flex-1">
							<img src={data.img} alt={data.title} />
						</div>
						<div className="flex-1 flex text-white relative h-64 md:h-auto pb-16">
							<div className="text-center self-center w-full ">
								<h4 className="text-2xl font-bold	m-4">{data.title}</h4>
								<p className="m-4">{data.description}</p>
								<p className="m-4">Tools: {data.tags.join(', ')}</p>
							</div>
							<div className="absolute bottom-5 flex px-3 space-x-3 w-full text-center">
								<a
									href={data.url}
									target="_blank"
									rel="noreferrer"
									className="p-2 rounded-md flex-grow text-blue-500 bg-white shadow flex-1 transition-transform transform hover:-translate-y-0.5 hover:shadow-md"
								>
									<span className="ml-3">Visit Page</span>
								</a>
								<a
									href={data.github}
									target="_blank"
									rel="noreferrer"
									className="p-2 rounded-md flex-grow text-blue-500 bg-white shadow flex-1 transition-transform transform hover:-translate-y-0.5 hover:shadow-md"
								>
									<span className="ml-3">GitHub</span>
								</a>
							</div>
						</div>
					</div>
				))}
			</Slide>
		</div>
	);
};

export default Portfolio;
