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

	return (
		<div className="bg-gradient-to-br from-blue-500 to-purple-400  pt-6 sm:p-6">
			<h3 className="text-center text-3xl text-white">Stuff I Made</h3>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 mt-8">
				{images.map(url => (
					<div className="overflow-hidden max-h-52 sm:h-auto sm:rounded-md sm:border-8 border-white shadow-xl transition-transform transform sm:hover:scale-105 ">
						<img src={url} alt="image" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
