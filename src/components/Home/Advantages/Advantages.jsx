import "./Advantages.scss"
import { advIc_1, advIc_2, advIc_3 } from "../../../service/image"

const Advantages = () => {
	return (
		<section className="advantages">
			<div className="container">
				<h2>Чому варто обрати саме мене?</h2>
				<div className="advantages__wrapper row">
					<div className="advantages__card">
						<img src={advIc_1} alt="advIcon" />
						<p className="txt-shadow">Ваші продажі виростуть в декілька разів з новою стртегією</p>
					</div>
					<div className="advantages__card">
						<img src={advIc_2} alt="advIcon" />
						<p className="txt-shadow">Ви відкриєте свій потенціал на повну і побудуєте міцні стосунки з аудиторією</p>
					</div>
					<div className="advantages__card">
						<img src={advIc_3} alt="advIcon" />
						<p className="txt-shadow">У вас будуть продающі пости які залучать нових клієнтів</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advantages