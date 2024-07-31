import "./About.scss"
import { author } from "../../../service/image"

const About = () => {
	return (
		<section className="about">
			<div className="container">
				<h2 className="txt-shadow">Про мене</h2>
				<div className="about__wrapper row">
					<div className="about__wrapper-author">
						<img src={author} alt="author" />
						<p className="txt-shadow">Anna Harkusha<br /><span>SMM спеціаліст</span></p>
					</div>
					<div className="about__wrapper-message">
						<h3>Привіт мене звати Анна</h3>
						<p>Я SMM спеціаліст і я допоможу твоєму бізнесу вийти на новий рівень. Моя мета — допомогти брендам розкрити свій потенціал і побудувати міцні стосунки з аудиторією через креативний контент та обдумане просування.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About