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
						<a href=""> <img src={iconInst} alt="icon-inst" /> </a>
						<a href=""> <img src={iconTg} alt="icon-tg" /> </a>
						<a href=""> <img src={iconFb} alt="icon-fb" /> </a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero