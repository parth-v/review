import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://a4f133d424dd.ngrok.io'
});

export default instance;