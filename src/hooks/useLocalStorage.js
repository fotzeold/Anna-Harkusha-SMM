import { useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const value = localStorage.getItem(key);
			return value ? JSON.parse(value) : defaultValue;
		} catch (error) {
			console.error('Error reading localStorage key:', error);
			return defaultValue;
		}
	});

	const setValue = (newValue) => {
		try {
			localStorage.setItem(key, JSON.stringify(newValue));
		} catch (error) {
			console.error('Error setting localStorage key:', error);
		}
		setStoredValue(newValue);
	};

	return [storedValue, setValue];
};

export default useLocalStorage;
