import { useQuery, UseQueryOptions } from 'react-query';
import { getUserStorage } from '../utils/utils';
import { Api } from '../../services/api';
import { createAllChampionsKey } from './keys';
import { Champion } from './types';



export const UseAllChamp = (options?: UseQueryOptions<Champion[]>) => {
	const user = getUserStorage();
	return useQuery(
		createAllChampionsKey(),
		async () => {
			const response = await Api.get<Champion[]>(`/champion`, {
				headers: { ['Authorization']: `Bearer ${user.token}` },
			});
			return response.data;
		},
		options,
	);
};
