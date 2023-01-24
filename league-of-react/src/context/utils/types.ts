export interface IUser {
	email?: string;
	token?: string;
}

export interface IChampion {
	id: string;
	name: string;
	description: string;
	difficulty: number;
	imageUrl: string;
	skills: string[];
	duty: {
		name: string;
	};
	users?: string[];
}

export interface IDuty {
	id?: string;
	name: string;
	description: string;
	champions: IChampion[];
}

export interface IContext extends IUser {
	authenticate: (email: string, password: string) => Promise<void>;
	logout: () => void;
}

export interface IAuthProvider {
	children: JSX.Element;
}
