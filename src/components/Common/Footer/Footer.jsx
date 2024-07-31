import "./Footer.scss"
import {
	annaHarkushaWhite,
	iconInstWhite,
	iconTgWhite,
	iconFbWhite
} from "../../../service/image"

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer__wrapper row">
					<img src={annaHarkushaWhite} alt="Anna Harkusha" />
					<a className="footer__phone txt-shadow" href="tel:+">+380 (93)-463-80-34</a>
					<div className="footer__social row">
						<a href=""> <img src={iconInstWhite} alt="icon-inst" /> </a>
						<a href=""> <img src={iconTgWhite} alt="icon-tg" /> </a>
						<a href=""> <img src={iconFbWhite} alt="icon-fb" /> </a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer

