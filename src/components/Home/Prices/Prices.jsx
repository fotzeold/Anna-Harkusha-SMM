import "./Prices.scss"
import Button from "../../Common/Button/Button"

const Prices = () => {
	return (
		<section className="prices">
			<div className="container">
				<h2 className="txt-shadow">Послуги та ціни</h2>
				<p className="prices__sub-title txt-shadow">Ціна залежить від поставлених завдань, особливостей бізнесу, обраних способів просування та інших факторів. </p>
				<div className="prices__wrapper row">
					<div className="prices-card">
						<h3><span>від</span> $100</h3>
						<p>Розробка смм стратегії </p>
						<Button
							btnTxt={"Замовити"}
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
					<div className="prices-card">
						<h3><span>від</span> $100</h3>
						<p>Розробка смм стратегії </p>
						<Button
							btnTxt={"Замовити"}
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
					<div className="prices-card">
						<h3><span>від</span> $100</h3>
						<p>Розробка смм стратегії </p>
						<Button
							btnTxt={"Замовити"}
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
					<div className="prices-card">
						<h3><span>від</span> $100</h3>
						<p>Розробка смм стратегії </p>
						<Button
							btnTxt={"Замовити"}
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
					<div className="prices-card">
						<h3><span>від</span> $100</h3>
						<p>Розробка смм стратегії </p>
						<Button
							btnTxt={"Замовити"}
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
					<div className="prices-card">
						<h3><span>від</span> $100</h3>
						<p>Розробка смм стратегії </p>
						<Button
							btnTxt={"Замовити"}
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
				</div>
			</div>
		</section>
	)
}

export default Prices