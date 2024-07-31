import "./Burger.scss"

const Burger = ({ navControll }) => {
	const { activeNav, toggleActiveNav } = navControll

	return (
		<button onClick={toggleActiveNav} className={`burger ${activeNav ? "active" : ""}`}>
			<figure></figure>
			<figure></figure>
			<figure></figure>
		</button>
	)
}

export default Burger

