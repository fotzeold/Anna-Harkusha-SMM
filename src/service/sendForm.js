const _TG_TOKEN_BOT = import.meta.env.VITE_BOT_TOKEN;
const _CHAT_ID = import.meta.env.VITE_CHAT_ID;
const _TG_URL = `https://api.telegram.org/bot${_TG_TOKEN_BOT}/sendMessage`

async function sendData(message) {
	try {
		return await fetch(_TG_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: _CHAT_ID,
				text: message,
				parse_mode: "html"
			}),
		})
	} catch (error) {
		return error
	}
}

export default sendData;