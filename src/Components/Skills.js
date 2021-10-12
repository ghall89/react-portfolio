import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
	return (
		<div class="rounded-md border-2 border-gray-200 p-3 m-4 ">
			<div className="text-center text-4xl m-3">
				<FontAwesomeIcon icon={faCoffee} />
			</div>

			<h3 class="text-center text-xl">Test</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic minus
				deserunt quaerat, officia saepe inventore est vel ut amet itaque, minima
				molestiae voluptatibus ducimus voluptas quod doloribus maiores explicabo
				ipsa! Perferendis ad exercitationem voluptas quia, quaerat doloremque
				enim architecto nulla ea assumenda quibusdam, quam sequi nisi eveniet.
				Possimus, rem dolorem!
			</p>
		</div>
	);
};

export default Skills;
