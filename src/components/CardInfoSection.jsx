import React from "react";

const CardInfoSection = ({ title }) => {
	return (
		<div className="cardInfoSection">
			<div className="iconsInfo">
				<i class="fa-solid fa-clipboard-check"></i>
			</div>
			<div className="textContent">
				<h3>{title}</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
					nostrum adipisci molestiae debitis ipsam nihil?
				</p>
			</div>
		</div>
	);
};

export default CardInfoSection;
