import axios from 'axios';

export const Api = axios.create({
	baseURL: 'https://league-of-nest.onrender.com',
});
