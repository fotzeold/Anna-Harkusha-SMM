import en from './translate/en.json';
import ua from './translate/ua.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

const resources = {
	en: {
		translation: en,
	},
	ua: {
		translation: ua,
	},
};

const getLanguageFromLocalStorage = () => {
	try {
		const storedLang = localStorage.getItem('elips-language');
		return storedLang ? JSON.parse(storedLang) : 'ua';
	} catch (error) {
		console.error('Error parsing language from localStorage', error);
		return 'ua';
	}
};

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: getLanguageFromLocalStorage(),
		fallbackLng: 'ua',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;