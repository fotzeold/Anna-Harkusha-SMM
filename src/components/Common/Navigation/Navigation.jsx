import "./Navigation.scss"
import Button from "../Button/Button"

const Navigation = ({ navControll }) => {
	const { activeNav, toggleActiveNav } = navControll

	return (
		<nav className={`navigation row ${activeNav ? "active" : ""}`}>
			<a href="#about" onClick={toggleActiveNav}>Про мене</a>
			<a href="#prices" onClick={toggleActiveNav}>Послуги</a>
			<a href="#contacts" onClick={toggleActiveNav}>Контакти</a>
			<Button
				btnTxt={"Консультація"}
				btnStyle={{ height: "35px" }}
			/>
		</nav>
	)
}

export default Navigation

