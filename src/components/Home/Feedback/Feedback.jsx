import "./Feedback.scss"
import Form from "../../Common/Form/Form"

const Feedback = ({ t }) => {
	return (
		<section className="feedback" id="contacts">
			<div className="container">
				<h2>{t("form.title")}</h2>
				<Form t={t} />
			</div>
		</section>
	)
}

export default Feedback