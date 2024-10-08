import "./Form.scss";
import Button from "../Button/Button";
import sendData from "../../../service/sendForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { closeModal } from "../Modal/ModalSlice";

const Form = ({ t }) => {
	const schema = yup.object().shape({
		userName: yup.string().required(t("form.fieldReq")),
		userPhone: yup
			.string()
			.matches(/^[0-9+() -]*$/, t("form.corrPhone"))
			.min(10, t("form.minPhone"))
			.required(t("form.fieldReq")),
	});

	const { register, handleSubmit, formState: { errors }, reset } = useForm({
		resolver: yupResolver(schema),
	});


	const dispatch = useDispatch()

	const [formStatus, setFormStatus] = useState(null);

	function sendForm(data) {
		let message = `Заявка з сайту\n\nІм'я: ${data.userName}\nТелефон: ${data.userPhone}`;
		sendData(message)
			.then(() => {
				setFormStatus(t("form.okMessage"));
				setTimeout(() => {
					setFormStatus("");
					dispatch(closeModal())
				}, 2000);
				reset();
			})
			.catch(() => setFormStatus(t("form.errorMessage")));
	}

	return (
		<div>
			<form className="form" onSubmit={handleSubmit(sendForm)}>
				<input
					type="text"
					placeholder={t("form.inpName")}
					{...register('userName')}
				/>
				{errors.userName && <p className="error">{errors.userName.message}</p>}

				<input
					type="tel"
					placeholder={t("form.inpPhone")}
					{...register('userPhone')}
				/>
				{errors.userPhone && <p className="error">{errors.userPhone.message}</p>}

				{formStatus && <p className="form-status" style={{ textAlign: "center" }}>{formStatus}</p>}
				<Button btnTxt={t("form.btn")} shouldClick={false} />
			</form>
		</div>
	);
};

export default Form;