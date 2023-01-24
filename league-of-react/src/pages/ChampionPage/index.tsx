import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import { UseAuth } from '../../context/hooks/UseAuth';
import { UseOneChamp } from '../../context/hooks/UseOneChampion';
import {
	ChampionContainer,
	ChampionContent,
	ChampionDescription,
	ChampionStats,
} from './style';

export default function ChampionU() {

	const { data: champion, isLoading } = UseOneChamp({cacheTime: 1});

	return (
		<>
			{isLoading && <Loader />}
			<ChampionContainer>
				<img
					src={champion?.imageUrl}
					alt={champion?.name}
				/>
				<h1>{champion?.name}</h1>
				<ChampionContent>
					<ChampionDescription>
						<strong>DESCRIÇÃO:</strong> <p>{champion?.description}</p>
					</ChampionDescription>
					<ChampionStats>
						<div>
							<strong>DIFICULDADE:</strong> <p>{champion?.difficulty}/10</p>
						</div>
						<div>
							<strong>FUNÇÃO:</strong> <p> {champion?.duty.name}</p>
						</div>
					</ChampionStats>
				</ChampionContent>
			</ChampionContainer>
		</>
	);
}
