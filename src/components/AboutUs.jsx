import React from "react";

const AboutUs = () => {
	return (
		<section className="aboutus">
			<article className="grid_global">
				<div className="imgContainer">
					<img
						className="uno"
						src="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
					<img
						className="dos"
						src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="img"
					/>
					<i className="icons fa-solid fa-cloud-meatball"></i>
				</div>
				<div className="textContainer">
					<h3>About Us</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
						commodi exercitationem repudiandae atque corrupti laborum odio ex
						velit aut sapiente.
					</p>
					<button>SEE MORE</button>
				</div>
			</article>
		</section>
	);
};

export default AboutUs;
