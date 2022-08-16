import React from "react";
import mobil from "../img/mobil.png";

const SpanSection = () => {
	return (
		<section className="spansectionContainer">
			<article className="grid_global">
				<div className="imgBo">
					<img src={mobil} alt="" loading="lazy" />
				</div>
				<div className="textBox">
					<span>previous information about us</span>
					<h2>
						did you know that there are hundreds of mobiles to choose from, let
						us help you in your search.
					</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
						aliquam voluptatibus ab a obcaecati! Sit magni omnis nostrum culpa
						laboriosam.
					</p>
					<button className="btn">read more</button>
				</div>
			</article>
		</section>
	);
};

export default SpanSection;
