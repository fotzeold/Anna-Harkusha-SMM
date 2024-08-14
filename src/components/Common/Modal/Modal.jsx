import "./Modal.scss"
import Form from "../Form/Form"
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from "./ModalSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Modal = () => {
	const isOpen = useSelector((state) => state.modal.isOpen);
	const dispatch = useDispatch();
	const { t } = useTranslation()

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}
	}, [isOpen])

	return (
		<div className={`modal ${isOpen ? "active" : ""}`}>
			<div className="modal__window">
				<h2>{t("modal.title")}</h2>
				<Form t={t} />
				<button
					className="modal__btn-close"
					onClick={() => dispatch(closeModal())}
				>&#10006;</button>
			</div>
		</div>
	)
}

export default Modal