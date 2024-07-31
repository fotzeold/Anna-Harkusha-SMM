import "./Form.scss"
import Button from "../Button/Button"

const Form = () => {
	return (
		<form className="form">
			<input type="text" placeholder="Ваше Прізвище та Ім’я" />
			<input type="tel" placeholder="Номер телефону" />
			<Button btnTxt={"Відправити"} />
		</form>
	)
}

export default Form