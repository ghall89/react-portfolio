import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
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
		<footer class="text-center text-white p-8 bg-blue-500">
			<p>
				<span>
					Made with <FontAwesomeIcon icon={faCoffee} /> in Rhode Island.
					Copyright&nbsp;{copyrightYear()},&nbsp;Graham&nbsp;Hall.
				</span>
			</p>
		</footer>
	);
};

export default Footer;
