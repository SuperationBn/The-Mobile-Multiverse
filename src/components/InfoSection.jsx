import React from "react";
import CardInfoSection from "./CardInfoSection";

const InfoSection = () => {
	return (
		<section className="infoContainer">
			<div className="info_SubTitleGlobal">
				<h2>we have the best phones</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure fuga
					quasi quis reprehenderit incidunt et veniam illo aliquid rerum illum.
				</p>
			</div>
			<article className="grid_global">
				<CardInfoSection title={"the best price"} />
				<CardInfoSection title={"the best discounts"} />
				<CardInfoSection title={"the best guarantee"} />
				<CardInfoSection title={"the best services"} />
			</article>
		</section>
	);
};

export default InfoSection;
