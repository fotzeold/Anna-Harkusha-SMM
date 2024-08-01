import "./Prices.scss"
import Button from "../../Common/Button/Button"

const Prices = () => {
	return (
		<section className="prices" id="prices">
			<div className="container">
				<h2 className="txt-shadow">Послуги та ціни</h2>
				<p className="prices__sub-title txt-shadow">Ціна залежить від поставлених завдань, особливостей бізнесу, обраних способів просування та інших факторів. </p>
				<div className="prices__wrapper row">
					<div className="prices-card">
						<h3> $50</h3>
						<p>Консультація</p>
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
						<p>Розробка SMM стратегії </p>
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
						<h3><span>від</span> $3</h3>
						<p>Підготовка контенту </p>
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
						<h3><span>від</span> $70</h3>
						<p>Регулярне ведення сторінки</p>
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
						<h3><span>від</span> $70</h3>
						<p>Підготовка контент плану </p>
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
						<p>Послуги таргетолога</p>
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
						<h3><span>від</span> $200</h3>
						<p>Комплексне просування в декількох соц мережах</p>
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
						<h3><span>від</span> $90</h3>
						<p>Створення та просування сторінки фейсбук</p>
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