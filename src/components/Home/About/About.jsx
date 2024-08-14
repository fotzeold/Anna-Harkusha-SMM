import "./About.scss"
import { author } from "../../../service/image"

const About = ({ t }) => {
	return (
		<section className="about" id="about">
			<div className="container">
				<h2 className="txt-shadow">{t("about.title")}</h2>
				<div className="about__wrapper row">
					<div className="about__wrapper-author">
						<img src={author} alt="author" />
						<p className="txt-shadow">{t("about.name")}<br /><span>{t("about.proffesion")}</span></p>
					</div>
					<div className="about__wrapper-message">
						<h3>{t("about.titleInfo")}</h3>
						<p>{t("about.info")}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About