import "./Header.scss"
import { annaHarkusha } from "../../../service/image"
import Navigation from "../Navigation/Navigation"
import Burger from "../Burger/Burger"
import { useTranslation } from "react-i18next"

import { useState } from "react"

const Header = ({ setLanguage, language }) => {
	const { t } = useTranslation()
	const [activeNav, setActiveNav] = useState(false)

	function toggleActiveNav() {
		setActiveNav(prev => !prev)
		console.log("Hello")
	}

	return (
		<header>
			<div className="container">
				<div className="header__wrapper row">
					<img className="header__logo" src={annaHarkusha} alt="logo" />
					<Navigation navControll={{ activeNav, toggleActiveNav, t, setLanguage, language }} />
					<Burger navControll={{ activeNav, toggleActiveNav }} />
				</div>
			</div>
		</header>
	)
}

export default Header

