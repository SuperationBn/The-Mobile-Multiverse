import React from "react";

const Footer = () => {
	const resetForm = e => {
		e.preventDefault();
	};

	return (
		<footer className="footer">
			<article className="grid_global">
				<div className="cardFooter">
					<i class="fa-solid fa-location-dot"></i>
					<h3>our location</h3>
					<span>
						8627 Maxie Key, Suite 630, 58960-7699, Millsmouth, Minnesota, United
						States
					</span>
				</div>
				<div className="cardFooter">
					<i class="fa-solid fa-phone"></i>
					<h3>OUR PHONE</h3>
					<span>+1 234-567-8910</span>
				</div>
				<div className="cardFooter">
					<i class="fa-solid fa-id-card"></i>
					<h3>our contracts</h3>
					<span>
						8627 Maxie Key, Suite 630, 58960-7699, Millsmouth, Minnesota, United
						States
					</span>
				</div>
				<div className="cardFooter">
					<i class="fa-solid fa-envelope"></i>
					<h3>e-mail</h3>
					<span>coreo@correo.com</span>
				</div>
			</article>
			<div className="footerFlex">
				<div className="textContent">
					<h3>more info</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
						sed aperiam odio assumenda corporis iusto non necessitatibus
						cupiditate dolorem quidem.
					</p>
					<div className="icons">
						<a
							href="https://www.facebook.com/xSuperationbnx/"
							target={"_blank"}
						>
							<i class="fa-brands fa-facebook"></i>
						</a>
						<a href="https://www.instagram.com/superationbn/" target={"_blank"}>
							<i class="fa-brands fa-instagram"></i>
						</a>
						<a href="https://do.linkedin.com/in/superationbn" target={"_blank"}>
							<i class="fa-brands fa-linkedin"></i>
						</a>
						<a
							href="https://www.youtube.com/channel/UCaJfBRNf09phqvio0mCOZYg/featured"
							target={"_blank"}
						>
							<i class="fa-brands fa-youtube"></i>
						</a>
					</div>
				</div>
				<div className="form">
					<form onSubmit={resetForm}>
						<div className="inputs">
							<div className="name">
								<label htmlFor="firstName">Name</label>
								<input
									id="firstName"
									name="firstName"
									type="text"
									placeholder="enter your name"
								/>
							</div>
							<div className="email">
								<label htmlFor="email">Email</label>
								<input
									id="email"
									name="email"
									type="email"
									placeholder="enter your email address"
								/>
							</div>
						</div>
						<textarea
							name="textarea"
							id="textarea"
							cols="30"
							rows="10"
							placeholder="enter a message"
						></textarea>
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
