import Header from "../Common/Header/Header"
import HomePage from "../Home/HomePage"
import Footer from "../Common/Footer/Footer"
import Modal from "../Common/Modal/Modal"
import { Provider } from 'react-redux';
import { store } from "../../redux/store";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect } from "react";

const App = () => {
	const [language, setLanguage] = useLocalStorage("harkusha-language", "ua");

	useEffect(() => {
		i18n.changeLanguage(language);
	}, [language]);

	const { t } = useTranslation()

	return (
		<Provider store={store}>
			<Header setLanguage={setLanguage} language={language} />
			<HomePage />
			<Modal />
			<Footer />
		</Provider>
	)
}

export default App