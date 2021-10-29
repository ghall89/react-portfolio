import quotes from '../db/quotes.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
	return (
		<div className="m-7 flex flex-wrap">
			{quotes.map(quote => (
				<div className="p-4 sm:w-1/2 m-auto">
					<div className="flex divide-x divide-gray-400">
						<FontAwesomeIcon
							icon={faQuoteLeft}
							className="text-gray-400 mr-5 text-xl"
						/>
						<p className="pl-4 text-lg text-gray-600">{quote.quote}</p>
					</div>
					<p className="text-sm italic mt-5">
						{quote.name}, {quote.relationship}
					</p>
				</div>
			))}
		</div>
	);
};

export default Testimonials;
