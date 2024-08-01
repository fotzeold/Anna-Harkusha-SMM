import "./Modal.scss"
import Form from "../Form/Form"
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from "./ModalSlice";

const Modal = () => {
	const isOpen = useSelector((state) => state.modal.isOpen);
	const dispatch = useDispatch();

	return (
		<div className={`modal ${isOpen ? "active" : ""}`}>
			<div className="modal__window">
				<h2>Залиште заявку <br /> і я з Вами звяжусь</h2>
				<Form />
				<button
					className="modal__btn-close"
					onClick={() => dispatch(closeModal())}
				>&#10006;</button>
			</div>
		</div>
	)
}

export default Modal