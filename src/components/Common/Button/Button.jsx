import "./Button.scss";
import { useDispatch } from 'react-redux';
import { openModal } from "../Modal/ModalSlice";

const Button = ({ btnTxt, btnStyle, shouldClick = true }) => {
	const dispatch = useDispatch();

	function handleClick() {
		if (shouldClick) {
			dispatch(openModal());
		}
	};

	return (
		<button
			className="btn"
			style={btnStyle}
			onClick={handleClick}
		>{btnTxt}</button>)
}

export default Button

