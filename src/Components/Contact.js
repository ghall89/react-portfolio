import { Newsletter } from '.';

const Contact = () => {
	return (
		<div className="py-40">
			<div className="text-center m-5">
				<h3 className="text-3xl mb-3 text-gray-600">Contact</h3>
			</div>
			<div className="max-w-2xl mx-auto mb-10 text-center text-lg">
				<p className="m-3">Like what you see, or just want to get in touch?</p>
				<p className="m-3">
					Drop me a line at{' '}
					<span className="text-white bg-gray-600">graham@ghall.dev</span>,
					follow me on{' '}
					<a
						className="text-blue-400 hover:text-blue-600"
						href="https://twitter.com/ohHeyItsGraham"
						target="_blank"
						rel="noreferrer"
					>
						Twitter
					</a>
					, or connect with me on{' '}
					<a
						className="text-blue-400 hover:text-blue-600"
						href="https://www.linkedin.com/in/ghalldev/"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn
					</a>
					.
				</p>
			</div>
		</div>
	);
};

export default Contact;
