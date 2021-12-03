import { Slide } from 'react-slideshow-image';

import portfolio from '../db/portfolio.json';

const Portfolio = () => {
	const fadeProperties = {
		duration: 3000,
		transitionDuration: 500,
		pauseOnHover: true,
		indicators: true,
		arrows: false
	};

	return (
		<div className="pt-14">
			<div className="text-center mb-16">
				<h3 className="text-3xl mb-3 text-gray-600">Stuff I Made</h3>
				<p className="text-lg text-gray-600 mx-4">
					Here are just a few of the things I've built on my journey to make the
					web a better place!
				</p>
			</div>
			<div className="slide-container">
				<Slide {...fadeProperties}>
					{portfolio.map(data => (
						<div
							className="md:flex bg-gradient-to-br from-blue-500 to-purple-400"
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
