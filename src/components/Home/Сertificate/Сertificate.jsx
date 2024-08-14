import "./Certificate.scss"

import { useState } from "react"


const Certificate = ({ t }) => {

	const [firstImage, setFirstImage] = useState(false)
	const [secondImage, setSecondImage] = useState(false)

	return (
		<section className="certificate">
			<div className="container">
				<h2>{t("certificate.title")}</h2>
				<p>{t("certificate.subtitle")}</p>
				<div className="certificate__wrapper row">
					<div className="certificate__wrapper-img">
						<div className={`certificate__image ${firstImage ? "active" : ""}`}>
							<img onClick={() => setFirstImage(prev => !prev)} src={t("certificate.ppcImg")} alt="ppcImg" />
						</div>
					</div>
					<div className="certificate__wrapper-img">
						<div className={`certificate__image ${secondImage ? "active" : ""}`}>
							<img onClick={() => setSecondImage(prev => !prev)} className={`${secondImage ? "active" : ""}`} src={t("certificate.smmImg")} alt="smmImg" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Certificate