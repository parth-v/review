import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://55341222c7b4.ngrok.io'
});

export default instance;