import "./Footer.scss"
import {
	annaHarkushaWhite,
	iconInstWhite,
	iconTgWhite,
	iconFbWhite
} from "../../../service/image"
import { useTranslation } from "react-i18next"

const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer>
			<div className="container">
				<div className="footer__wrapper row">
					<div className="footer__left">
						<img src={annaHarkushaWhite} alt="Anna Harkusha" />
						<a className="txt-shadow" href="https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B8+%D0%91%D0%B0%D0%B6%D0%B0%D0%BD%D0%B0,+16,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.3958018,30.6236388,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4c45177630849:0x2ed1b22cb7df4581!8m2!3d50.3958018!4d30.6262137!16s%2Fg%2F11h3jh8g11?entry=ttu">
							{t("footer.address")}
						</a>
						<a className="txt-shadow" href="mailto:anna.smm.ppc2024@gmail.com">anna.smm.ppc2024@gmail.com</a>
					</div>
					<div className="footer__right">
						<a className="footer__phone txt-shadow" href="tel:+380995035741">+380 99 503 5741</a>
						<a className="footer__phone txt-shadow" href="tel:+380978959768">+380 97 895 9768</a>
						<div className="footer__social row">
							<a href="https://www.instagram.com/annaharkusha_?igsh=MTdmNGxtdG5qdnBwNA%3D%3D&utm_source=qr"> <img src={iconInstWhite} alt="icon-inst" /> </a>
							<a href="https://t.me/annharkusha"> <img src={iconTgWhite} alt="icon-tg" /> </a>
							<a href="https://www.facebook.com/share/pHokGg8p1v3ktnzg/?mibextid=LQQJ4d"> <img src={iconFbWhite} alt="icon-fb" /> </a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer

