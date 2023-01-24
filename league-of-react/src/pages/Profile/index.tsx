import { Card } from '../../components/Card';
import Loader from '../../components/Loader';
import { Champion } from '../../context/hooks/types';
import { UseUser } from '../../context/hooks/UseUser';
import {
	CardList,
	DescriptionSection,
	ImageSection,
	ProfileContainer,
	ProfileContent,
	ProfileHeader,
} from './style';

export default function Profile() {
	const { data: user, isLoading } = UseUser({
		cacheTime: 5000,
	});

	return (
		<>
			{isLoading && <Loader />}
			<ProfileContainer>
				<ProfileHeader>
					<ImageSection>
						<img
							src={user?.imageUrl}
							alt={user?.name}
						/>
						<h3>{user?.name}</h3>
						<p>
							<strong>E-mail: </strong>
							{user?.email}
						</p>
					</ImageSection>
					<DescriptionSection>
						<h1>
							<small>Seja Bem vindo </small>
							{user?.nickname}
						</h1>
						<p>
							Monte sua equipe e se torne um <strong>Desafiante!</strong>
						</p>
					</DescriptionSection>
				</ProfileHeader>
				<ProfileContent>
					<h2>Meus Campeões</h2>
					<CardList>
						{user?.champions &&
							user.champions.map((champion: Champion) => {
								return (
									<Card
										key={champion.id}
										champion={champion}
									/>
								);
							})}
					</CardList>
				</ProfileContent>
			</ProfileContainer>
		</>
	);
}
