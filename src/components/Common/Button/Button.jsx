import "./Button.scss";

const Button = ({ btnTxt, btnStyle }) => {
	return (<button className="btn" style={btnStyle}>{btnTxt}</button>)
}

export default Button