import { useQuery, UseQueryOptions } from 'react-query';
import { Api } from '../../services/api';
import { getUserStorage } from '../utils/utils';
import { createUserKey } from './keys';
import { User } from './types';

export const UseUser = (options?: UseQueryOptions<User>) => {
	const user = getUserStorage();
	return useQuery(
		createUserKey(),
		async () => {
			const response = await Api.get<User>(`/auth`, {
				headers: {
					['Authorization']: `Bearer ${user.token}`,
				},
			});
			return response.data;
		},
		options,
	);
};
