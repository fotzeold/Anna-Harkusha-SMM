import "./Form.scss";
import Button from "../Button/Button";
import sendData from "../../../service/sendForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { closeModal } from "../Modal/ModalSlice";

const schema = yup.object().shape({
	userName: yup.string().required("Поле є обов'язковим"),
	userPhone: yup
		.string()
		.matches(/^[0-9+() -]*$/, "Введіть дійсний номер телефону")
		.min(10, "Номер телефону має містити щонайменше 10 цифр")
		.required("Поле є обов'язковим"),
});

const Form = () => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm({
		resolver: yupResolver(schema),
	});

	const dispatch = useDispatch()

	const [formStatus, setFormStatus] = useState(null);

	function sendForm(data) {
		let message = `Заявка з сайту\n\nІм'я: ${data.userName}\nТелефон: ${data.userPhone}`;
		sendData(message)
			.then(() => {
				setFormStatus("Форма успішно надіслана!");
				setTimeout(() => {
					setFormStatus("");
					dispatch(closeModal())
				}, 2000);
				reset();
			})
			.catch(() => setFormStatus("Виникла помилка при надсиланні форми."));
	}

	return (
		<div>
			<form className="form" onSubmit={handleSubmit(sendForm)}>
				<input
					type="text"
					placeholder="Ваше Прізвище та Ім’я"
					{...register('userName')}
				/>
				{errors.userName && <p className="error">{errors.userName.message}</p>}

				<input
					type="tel"
					placeholder="Номер телефону"
					{...register('userPhone')}
				/>
				{errors.userPhone && <p className="error">{errors.userPhone.message}</p>}

				{formStatus && <p className="form-status" style={{ textAlign: "center" }}>{formStatus}</p>}
				<Button btnTxt={"Відправити"} shouldClick={false} />
			</form>
		</div>
	);
};

export default Form;