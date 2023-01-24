import { createContext, useEffect, useState } from 'react';
import { IAuthProvider, IContext, IUser } from '../utils/types';
import {
	getUserStorage,
	LoginRequest,
	setUserStorage
} from '../utils/utils';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
	const [user, setuser] = useState<IUser | null>();

	useEffect(() => {
		const user = getUserStorage();
		// const championId = getChampionIdStorage();
		if (user) {
			setuser(user);
		}
	}, []);

	async function authenticate(email: string, password: string) {
		const response = await LoginRequest(email, password);

		const payload = {
			token: response.token,
			email: response.user.email,
		};

		setuser(payload);
		setUserStorage(payload);
	}

	function logout() {
		setuser(null);
		localStorage.clear();
	}

	return (
		<AuthContext.Provider value={{ ...user, authenticate, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
