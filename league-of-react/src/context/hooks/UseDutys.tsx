import { useQuery, UseQueryOptions } from 'react-query';
import { Api } from '../../services/api';
import { getUserStorage } from '../utils/utils';
import { createAllDutysKey } from './keys';
import { Duty } from './types';



export const UseAllDutys = (options?: UseQueryOptions<Duty[]>) => {
	const user = getUserStorage();
	return useQuery(
		createAllDutysKey(),
		async () => {
			const response = await Api.get<Duty[]>(`/duty`, {
				headers: {
					['Authorization']: `Bearer ${user.token}`,
				},
			});
			return response.data;
		},
		options,
	);
};
