import React from "react";

const Hero = () => {
	return (
		<header className="hero">
			<article className="grid_global">
				<div className="textContent">
					<h1>the mobile multiverse</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia,
						voluptates.
					</p>
				</div>
				<div className="iconsContenet">
					<div className="boxIcon">
						<i class="fa-solid fa-mobile-screen-button"></i>
						<h3>models</h3>
					</div>
					<div className="boxIcon">
						<i class="fa-solid fa-box-open"></i>
						<h3>new</h3>
					</div>
					<div className="boxIcon">
						<i class="fa-solid fa-people-carry-box"></i>
						<h3>warranty</h3>
					</div>
					<div className="boxIcon">
						<i class="fa-brands fa-space-awesome"></i>
						<h3>special</h3>
					</div>
				</div>
			</article>
		</header>
	);
};

export default Hero;
