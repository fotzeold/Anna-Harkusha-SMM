import Header from "../Common/Header/Header"
import HomePage from "../Home/HomePage"
import Footer from "../Common/Footer/Footer"
import Modal from "../Common/Modal/Modal"
import { Provider } from 'react-redux';
import { store } from "../../redux/store";

const App = () => {
	return (
		<Provider store={store}>
			<Header />
			<HomePage />
			<Modal />
			<Footer />
		</Provider>
	)
}

export default App