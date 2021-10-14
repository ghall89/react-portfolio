import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { Slide } from 'react-slideshow-image';

const Portfolio = () => {
	const images = [
		'https://res.cloudinary.com/dfkh0m4wf/image/upload/v1631303064/ghall.dev/mindfulness_zumonb.jpg',
		'https://res.cloudinary.com/dfkh0m4wf/image/upload/v1627086846/ghall.dev/classiccalc_udqnxl.jpg',
		'https://res.cloudinary.com/dfkh0m4wf/image/upload/v1626030730/ghall.dev/campus-connect_voww53.jpg',
		'https://res.cloudinary.com/dfkh0m4wf/image/upload/v1625859017/ghall.dev/fam-fin_zk5ur7.jpg',
		'https://res.cloudinary.com/dfkh0m4wf/image/upload/v1625859017/ghall.dev/weather_ngrfiw.jpg',
		'https://res.cloudinary.com/dfkh0m4wf/image/upload/v1625859017/ghall.dev/css-shadow_gb82xx.jpg',
		'https://res.cloudinary.com/dfkh0m4wf/image/upload/v1625859017/ghall.dev/work-day_ff0xvy.jpg'
	];

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
			<div className="max-w-5xl mx-auto bg-gray-300 rounded-md overflow-hidden shadow-md slide-container">
				<Slide {...fadeProperties}>
					{images.map(url => (
						<div className="flex">
							<div className="flex-1">
								<img src={url} alt="" />
							</div>
							<div className="flex-1 p-3">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Impedit quo sint id molestiae. Consectetur dolores laboriosam,
									accusamus ipsam pariatur minima nihil beatae dolore reiciendis
									doloremque, ipsum modi hic earum sunt!
								</p>
							</div>
						</div>
					))}
				</Slide>
			</div>
		</div>
	);
};

export default Portfolio;
