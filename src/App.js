import logo from './img/logo.svg';
import { About, Skills } from './Components/';

function App() {
	return (
		<div className="App">
			<header class="p-4">
				<img class="w-4/6 max-w-3xl m-auto" src={logo} alt="Graham Hall" />
				<h2 class="text-center text-2xl text-gray-600 py-7">
					Front-End Web Developer
				</h2>
			</header>
			<About />
			<div className="flex">
				<Skills />
				<Skills />
				<Skills />
			</div>
		</div>
	);
}

export default App;
