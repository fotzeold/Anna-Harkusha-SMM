import "./Prices.scss"
import Button from "../../Common/Button/Button"

const Prices = ({ t }) => {
	const pricesList = t('prices.list', { returnObjects: true });

	return (
		<section className="prices" id="prices">
			<div className="container">
				<h2 className="txt-shadow">{t("prices.title")}</h2>
				<p className="prices__sub-title txt-shadow">{t("prices.subTitle")}</p>
				<div className="prices__wrapper row">
					{
						pricesList && pricesList.map((el, i) => {
							return (
								<div className="prices-card" key={i}>
									<h3>{el.price}</h3>
									<p>{el.descr}</p>
									<Button
										btnTxt={t("prices.btn")}
										btnStyle={{
											maxWidth: "170px",
											width: "100%",
											background: "white",
											border: "1px solid #00D7E4",
											color: "black",
											textShadow: "none"
										}}
									/>
								</div>
							)
						})
					}

				</div>
			</div>
		</section>
	)
}

export default Prices