import logo from '../img/logo.svg';

const Header = () => {
	return (
		<header className="p-4">
			<img
				className="sm:w-4/6 sm:max-w-3xl m-auto"
				src={logo}
				alt="Graham Hall"
			/>
			<h2 className="text-center text-2xl text-gray-600 py-7">
				Front-End Web Developer
			</h2>
		</header>
	);
};

export default Header;
