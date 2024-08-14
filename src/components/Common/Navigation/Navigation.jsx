import "./Navigation.scss"
import Button from "../Button/Button"
import { useEffect } from "react"

const Navigation = ({ navControll }) => {
	const { activeNav, toggleActiveNav, t, setLanguage, language } = navControll

	const handleLanguageChange = (lang) => {
		setLanguage(lang);
	};

	useEffect(() => {
		if (activeNav) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}
	}, [activeNav])

	return (
		<nav className={`navigation row ${activeNav ? "active" : ""}`}>
			<a href="#about" onClick={toggleActiveNav}>{t("header.about")}</a>
			<a href="#prices" onClick={toggleActiveNav}>{t("header.prices")}</a>
			<a href="#contacts" onClick={toggleActiveNav}>{t("header.contact")}</a>
			<div className="navigation__lang row">
				<button className={`${language == "ua" ? "active" : ""}`} onClick={() => handleLanguageChange("ua")}>UA</button>
				<figure></figure>
				<button className={`${language == "en" ? "active" : ""}`} onClick={() => handleLanguageChange("en")}>EN</button>
			</div>
			<div
				className="navigation__btn"
				onClick={toggleActiveNav}
			>
				<Button
					btnTxt={t("header.btn")}
					btnStyle={{ height: "35px" }}
				/>
			</div>
		</nav>
	)
}

export default Navigation

