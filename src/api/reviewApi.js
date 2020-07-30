import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://952b8e218db0.ngrok.io'
});

export default instance;