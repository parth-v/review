import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://f88ee5f4d239.ngrok.io'
});

export default instance;