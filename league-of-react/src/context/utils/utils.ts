import { Api } from '../../services/api';
import { RegisterUser } from '../hooks/types';
import { IUser } from './types';

export function setUserStorage(user: IUser | null) {
	localStorage.setItem('u', JSON.stringify(user));
}

export function getUserStorage() {
	const json = localStorage.getItem('u');
	if (!json) {
		return null;
	}
	const user = JSON.parse(json);
	return user ?? null;
}


export async function LoginRequest(email: string, password: string) {
	try {
		const request = await Api.post('/auth', { email, password });
		return request.data;
	} catch (e) {
		console.log(e);
		null;
	}
}


export function getChampionIdStorage() {
	const json = localStorage.getItem('onec');
	if (!json) {
		return null;
	}

	const championId = JSON.parse(json);

	return championId ?? null;
}

export function isDisabledRegister(registerState: RegisterUser) {
	if (
		!registerState.confirmPass ||
		!registerState.email ||
		!registerState.imageUrl ||
		!registerState.name ||
		!registerState.nickname ||
		!registerState.password
	) {
		return true;
	}

	if (registerState.password !== registerState.confirmPass) {
		return true;
	}

	if (registerState.password.length < 8) {
		return true;
	}

	return false;
}


export async function registerUser(
	name: string,
	nickname: string,
	imageUrl: string,
	email: string,
	password: string,
) {
	try {
		const request = await Api.post('/user', {
			name,
			nickname,
			imageUrl,
			email,
			password,
		});
		console.log(request.data);
		return request.data;
	} catch (error) {
		console.log(error);
		null;
	}
}