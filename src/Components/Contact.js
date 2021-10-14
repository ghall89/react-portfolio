const Contact = () => {
	return (
		<div id="contact">
			<div className="text-center m-5">
				<h3 className="text-3xl mb-3 text-gray-600">Contact</h3>
			</div>
			<div class="max-w-2xl mx-auto mb-10 text-center text-lg">
				<p className="m-3">Like what you see, or just want to get in touch?</p>
				<p className="m-3">
					Drop me a line at{' '}
					<span className="text-purple-600">graham at ghall dot dev</span>,
					follow me on{' '}
					<a className="text-blue-400 hover:text-blue-600" href="#">
						Twitter
					</a>
					, or connect with me on{' '}
					<a className="text-blue-400 hover:text-blue-600" href="#">
						LinkedIn
					</a>
					.
				</p>
			</div>
		</div>
	);
};

export default Contact;
