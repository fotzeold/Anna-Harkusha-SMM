import Hero from "./Hero/Hero"
import About from "./About/About"
import Advantages from "./Advantages/Advantages"
import Prices from "./Prices/Prices"
import Feedback from "./Feedback/Feedback"
import Certificate from "./Сertificate/Сertificate"
import Reviews from "./Reviews/Reviews"
import { useTranslation } from "react-i18next"

const HomePage = () => {
	const { t } = useTranslation()

	return (
		<main>
			<Hero t={t} />
			<About t={t} />
			<Advantages t={t} />
			<Prices t={t} />
			<Certificate t={t} />
			<Reviews t={t} />
			<Feedback t={t} />
		</main>
	)
}

export default HomePage