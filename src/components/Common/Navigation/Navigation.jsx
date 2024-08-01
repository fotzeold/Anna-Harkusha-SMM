import "./Navigation.scss"
import Button from "../Button/Button"
import { useEffect } from "react"

const Navigation = ({ navControll }) => {
	const { activeNav, toggleActiveNav } = navControll

	useEffect(() => {
		if (activeNav) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}
	}, [activeNav])

	return (
		<nav className={`navigation row ${activeNav ? "active" : ""}`}>
			<a href="#about" onClick={toggleActiveNav}>Про мене</a>
			<a href="#prices" onClick={toggleActiveNav}>Послуги</a>
			<a href="#contacts" onClick={toggleActiveNav}>Контакти</a>
			<div
				className="navigation__btn"
				onClick={toggleActiveNav}
			>
				<Button
					btnTxt={"Консультація"}
					btnStyle={{ height: "35px" }}
				/>
			</div>
		</nav>
	)
}

export default Navigation

