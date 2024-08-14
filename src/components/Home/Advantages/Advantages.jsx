import "./Advantages.scss"
import { advIc_1, advIc_2, advIc_3 } from "../../../service/image"

const Advantages = ({ t }) => {
	return (
		<section className="advantages">
			<div className="container">
				<h2>{t("advantages.title")}</h2>
				<div className="advantages__wrapper row">
					<div className="advantages__card">
						<img src={advIc_1} alt="advIcon" />
						<p className="txt-shadow">{t("advantages.adv_1")}</p>
					</div>
					<div className="advantages__card">
						<img src={advIc_2} alt="advIcon" />
						<p className="txt-shadow">{t("advantages.adv_2")}</p>
					</div>
					<div className="advantages__card">
						<img src={advIc_3} alt="advIcon" />
						<p className="txt-shadow">{t("advantages.adv_3")}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advantages