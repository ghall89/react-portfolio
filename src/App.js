import { About, Contact, Nav, Portfolio, Skills } from './Components/';

import copyrightYear from './helpers/copyrightYear';

import logo from './img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
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
				<div className="pt-14">
					<div className="text-center mb-16">
						<h3 className="text-3xl mb-3 text-gray-600">Stuff I Made</h3>
						<p className="text-lg text-gray-600 mx-4">
							Here are just a few of the things I've built on my journey to make
							the web a better place!
						</p>
					</div>
				</div>
				<Portfolio />
			</section>
			<section id="contact">
				<Contact />
			</section>

			<footer className="text-center text-white p-8 bg-gradient-to-br from-blue-500 to-purple-400 shadow-inner">
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
