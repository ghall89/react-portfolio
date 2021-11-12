const Newsletter = () => {
	return (
		<section id="signup" className="m-3">
			<div id="mlb2-CODE" className="ml-subscribe-form ml-subscribe-form-CODE">
				<div className="ml-vertical-align-center">
					<div
						className="subscribe-form ml-block-success"
						style={{ display: 'none' }}
					>
						<div className="form-section">
							<p>
								Thank you, you have successfully subscribed to our announcement
								list!
							</p>
						</div>
					</div>
					<form
						className="ml-block-form"
						action="https://landing.mailerlite.com/webforms/submit/CODE"
						data-id="CODE"
						data-code="CODE"
						method="POST"
						target="_blank"
					>
						<p className="signup-title">
							Get insights from a budding web developer, cool resources, and fun
							links sent directly to your inbox every Wednesday.
						</p>
						<div className="subscribe-form m-2">
							<div className="form-section">
								<div className="form-group ml-field-email ml-validate-required ml-validate-email focus:ring-0">
									<input
										type="email"
										name="fields[email]"
										className="border-2 border-gray-500 p-2 rounded-md mr-2 focus:border-black"
										placeholder="Email address"
										autoComplete="email"
										spellCheck="false"
										autoCapitalize="off"
										autoCorrect="off"
									/>
									<input type="hidden" name="ml-submit" value="1" />
									<button type="submit" className="text-blue-500 border-2 border-blue-500 p-2 rounded-md flex-grow transition-colors hover:text-white hover:bg-blue-500 min-w-full md:min-w-0">
										Subscribe
									</button>
									<button
										disabled
										style={{ display: 'none' }}
										type="button"
										className="loading"
									>
										Submitting...
										{/* <img
										src="https://static.mailerlite.com/images/rolling@2x.gif"
										alt="loading..."
										width="20"
										height="20"
										style={{ width: '20px', height: '20px' }}
									/> */}
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
