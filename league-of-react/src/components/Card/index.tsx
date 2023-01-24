import { useNavigate } from 'react-router-dom';
import { Champion } from '../../context/hooks/types';
import { UseAuth } from '../../context/hooks/UseAuth';
import { CardButton, CardContainer, CardContent } from './style';

export const Card = (props: { champion: Champion }) => {
	const navigate = useNavigate();

	function handleClick(e: any, id: string) {
		e.stopPropagation();
		const json = JSON.stringify(id);
		localStorage.setItem('onec', json);
		if (id) {
			navigate('/oneChampion');
		}
		return { message: 'Id Inválido' };
	}

	return (
		<>
		<CardContainer onClick={(e) => handleClick(e, props.champion.id)}>
			<img
				src={props.champion.imageUrl}
				alt={props.champion.name}
			/>
			{/* <CardContent>
				
					
						<p>
							<strong>{props.champion.name}</strong>
						</p>
					

					{/* <li>
						<p>FUNÇÃO: {props.champion.duty?.name}</p>
					</li> */}
				
				{/* <CardButton>Adicionar</CardButton> *
			</CardContent> */}
		</CardContainer>
		</>
	);
};
