import { useEffect, useState } from 'react';
import { useQuery, UseQueryOptions } from 'react-query';
import { Api } from '../../services/api';
import { getChampionIdStorage, getUserStorage } from '../utils/utils';
import { createOneChampionKey } from './keys';
import { Champion } from './types';

export const UseOneChamp = (options?: UseQueryOptions<Champion>) => {
	const user = getUserStorage();
	const championId = getChampionIdStorage();

	return useQuery(
		createOneChampionKey(),
		async () => {
			const response = await Api.get<Champion>(`/champion/${championId}`, {
				headers: {
					['Authorization']: `Bearer ${user.token}`,
				},
			});
			return response.data;
		},
		options,
	);
};
