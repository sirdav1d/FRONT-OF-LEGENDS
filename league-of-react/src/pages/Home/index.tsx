import { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Card } from '../../components/Card';
import Loader from '../../components/Loader';
import { Champion } from '../../context/hooks/types';
import { UseAllChamp } from '../../context/hooks/UseAllChampions';
import { UseAllDutys } from '../../context/hooks/UseDutys';
import {
	CardListContainer,
	ContainerHome,
	ContentHome,
	FilterButton,
	FilterContainer,
	SearchButton,
	SearchContainer,
} from './style';

function Home() {
	const { data: champions, isLoading } = UseAllChamp({
		staleTime: 60000,
		keepPreviousData: true,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});

	const { data: dutys } = UseAllDutys({
		staleTime: 60000,
		keepPreviousData: true,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});

	const [filter, setFilter] = useState<void | Champion[] | undefined>(
		champions,
	);
	const [search, setSearch] = useState<string>('');

	function initialState(data: void | Champion[] | undefined) {
		setTimeout(() => {
			setFilter(data);
		}, 100);
	}

	async function handleClick(data: Champion[] | undefined) {
		return setFilter(data);
	}

	useEffect(() => {
		return setFilter(initialState(champions));
	}, [champions]);

	return (
		<>
			{isLoading && <Loader />}
			<ContainerHome>
				<h1>CAMPEÕES</h1>
				<ContentHome>
					<FilterContainer>
						<SearchContainer>
							<input
								name='search'
								onChange={(e) => setSearch(e.target.value)}
								type='text'
								value={search}
							/>
							<label htmlFor='search'>
								<SearchButton>
									<FiSearch />
								</SearchButton>
							</label>
						</SearchContainer>
						<FilterButton onClick={() => handleClick(champions)}>
							TODOS
						</FilterButton>
						{dutys &&
							dutys?.map((duty) => {
								return (
									<div key={duty.id}>
										<FilterButton onClick={() => handleClick(duty.champions)}>
											{duty.name}
										</FilterButton>
									</div>
								);
							})}
					</FilterContainer>
					<br />
					<CardListContainer>
						{filter?.map((champion: Champion) => {
							return (
								<Card
									key={champion.id}
									champion={champion}
								/>
							);
						})}
					</CardListContainer>
				</ContentHome>
			</ContainerHome>
		</>
	);
}

export default Home;
