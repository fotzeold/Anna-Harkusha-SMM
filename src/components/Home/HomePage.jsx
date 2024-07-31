import Hero from "./Hero/Hero"
import About from "./About/About"
import Advantages from "./Advantages/Advantages"
import Prices from "./Prices/Prices"
import Feedback from "./Feedback/Feedback"

const HomePage = () => {
	return (
		<main>
			<Hero />
			<About />
			<Advantages />
			<Prices />
			<Feedback />
		</main>
	)
}

export default HomePage