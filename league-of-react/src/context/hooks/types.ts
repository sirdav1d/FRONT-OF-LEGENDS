export type User = {
	id: string;
	name: string;
	nickname: string;
	imageUrl: string;
	email: string;
	role: string;
	champions: Champion[];
};

export type Champion = {
	id: string;
	name: string;
	description: string;
	difficulty: number;
	imageUrl: string;
	skills: string[];
	duty: {
		id: string;
		name: string;
	};
	users: string[];
};

export type Duty = {
	id: string;
	name: string;
	description: string;
	champions: Champion[];
};


export type RegisterUser = {
	name: string;
	nickname: string;
	imageUrl: string;
	email: string;
	password: string;
	confirmPass: string;
};