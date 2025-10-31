import React from "react";

import { Jumbotron } from "./Jumbotron.jsx";
import { Navbar } from "./Navbar.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";
import pokemon1 from "./img/pokemon1.png";
import pokemon2 from "./img/pokemon2.png";
import pokemon3 from "./img/pokemon3.png";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<h1 className="text-center py-5">Popular pokemon:</h1>
			<div className="container-fluid d-flex justify-content-center">
				<Card name='Snorelax' description='Huge sleepy Pokémon that loves eating and blocking paths.' src={pokemon1}/>
				<Card name='Pikachu' description='Energetic electric mouse known for lightning attacks and cuteness.' src={pokemon2}/>
				<Card name='Bulbasaur' description='Plant-reptile hybrid with a bulb that grows into power' src={pokemon3}/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
