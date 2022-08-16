import "./App.css";
import AboutUs from "./components/AboutUs";
import Envios from "./components/Envios";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import PorQueElegirnos from "./components/PorQueElegirnos";
import SpanSection from "./components/SpanSection";

function App() {
	return (
		<div className="App">
			<Hero />
			<main id="main">
				<InfoSection />
				<PorQueElegirnos />
				<SpanSection />
				<Envios />
				<AboutUs />
			</main>
			<Footer />
		</div>
	);
}

export default App;
