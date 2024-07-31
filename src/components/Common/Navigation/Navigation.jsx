import "./Navigation.scss"
import Button from "../Button/Button"

const Navigation = ({ navControll }) => {
	const { activeNav, toggleActiveNav } = navControll

	return (
		<nav className={`navigation row ${activeNav ? "active" : ""}`}>
			<a href="#" onClick={toggleActiveNav}>Про мене</a>
			<a href="#" onClick={toggleActiveNav}>Послуги</a>
			<a href="#" onClick={toggleActiveNav}>Контакти</a>
			<Button
				btnTxt={"Консультація"}
				btnStyle={{ height: "35px" }}
			/>
		</nav>
	)
}

export default Navigation

