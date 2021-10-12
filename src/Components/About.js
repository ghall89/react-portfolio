import { Social } from './index';

const About = () => {
	return (
		<div className="bg-gradient-to-br from-blue-500 to-purple-400 p-6 mt-20">
			<div className="w-full h-20">
				<img
					className="rounded-full w-52 mx-auto transform -translate-y-32"
					src="https://res.cloudinary.com/dfkh0m4wf/image/upload/v1629823161/ghall.dev/portrait_y8yaqq.jpg"
					alt="Graham"
				/>
			</div>
			<div className="text-white text-lg text-center md:w-3/4 mx-auto">
				<p className="m-4">
					Hey there! I'm Graham, and I'm a front-end web developer from Rhode
					Island.
				</p>
				<p className="m-4">
					I created my first website when I was in middle school, and even
					though it wasn't that great it kicked off my love for building great
					things. All these years later, that passion still burns strong, and my
					skillset has only grown!
				</p>
				<p className="m-4">
					I spent several years in the design world, but in 2020 I decided to
					make the jump towards taking on web development professionally. In
					January of 2021, I began attending a web development bootcamp with UC
					Berkeley, and graduated the following summer.
				</p>
				<p className="m-4">
					When I'm not writing code you can find me playing video games, hiking,
					and trying to improve my cooking skills!
				</p>
			</div>
			<div className="mx-auto">
				<Social />
			</div>
		</div>
	);
};

export default About;
