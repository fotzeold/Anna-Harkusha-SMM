import "./Hero.scss"
import Button from "../../Common/Button/Button"
import { iconInst, iconTg, iconFb, avatarMob, avatarPC } from "../../../service/image"

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero__wrapper">
					<img className="hero__avatar-pc" src={avatarPC} alt="avatar" />
					<img className="hero__avatar-mob" src={avatarMob} alt="avatar" />
					<h1>SMM-просування для вашої ніші на довгостроковій основі</h1>
					<p>Швидко. Якісно. Надійно</p>
					<Button btnTxt={"Консультація"} btnStyle={{ width: "280px" }} />
					<div className="hero__wrapper-social row">
						<a href="https://www.instagram.com/annaharkusha_?igsh=MTdmNGxtdG5qdnBwNA%3D%3D&utm_source=qr"> <img src={iconInst} alt="icon-inst" /> </a>
						<a href="https://t.me/annharkusha"> <img src={iconTg} alt="icon-tg" /> </a>
						<a href="https://www.facebook.com/share/pHokGg8p1v3ktnzg/?mibextid=LQQJ4d"> <img src={iconFb} alt="icon-fb" /> </a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero