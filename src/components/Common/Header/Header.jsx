import "./Header.scss"
import { annaHarkusha } from "../../../service/image"
import Navigation from "../Navigation/Navigation"
import Burger from "../Burger/Burger"

import { useState } from "react"

const Header = () => {
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
					<Navigation navControll={{ activeNav, toggleActiveNav }} />
					<Burger navControll={{ activeNav, toggleActiveNav }} />
				</div>
			</div>
		</header>
	)
}

export default Header

