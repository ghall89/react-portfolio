import { About, Contact, Nav, Portfolio, Skills } from './Components/';

import logo from './img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
	// display copyright year based on current year
	const copyrightYear = () => {
		const year = new Date().getFullYear();
		if (year > 2021) {
			return <span>2021 - {year}</span>;
		} else {
			return <span>{year}</span>;
		}
	};

	return (
		<div className="App mb-16 md:ml-12 md:mb-0">
			<header className="h-screen p-4 flex header-img">
				<div className="w-full self-center">
					<img
						className="sm:w-4/6 sm:max-w-3xl m-auto"
						src={logo}
						alt="Graham Hall's logo"
					/>
					<h2 className="text-center text-2xl text-gray-600 py-7">
						Front-End Web Developer
					</h2>
				</div>
			</header>
			<section id="about">
				<About />
				<Skills />
			</section>
			<section id="portfolio">
				<Portfolio />
			</section>
			<section id="contact">
				<Contact />
			</section>

			<footer className="text-center text-white p-8 bg-gradient-to-br from-blue-500 to-purple-400 ">
				<p>
					<span>
						Made with <FontAwesomeIcon icon={faCoffee} /> in Rhode Island.
						Copyright&nbsp;{copyrightYear()},&nbsp;Graham&nbsp;Hall.
					</span>
				</p>
			</footer>
			<Nav />
		</div>
	);
}

export default App;
