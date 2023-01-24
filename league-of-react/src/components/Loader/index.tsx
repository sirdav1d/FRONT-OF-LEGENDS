import React from 'react';
import { ContainerLoader, Overlay } from './style';
import loader from '../../assets/images/loader3.gif';

export default function Loader() {
	return (
		<Overlay>
			<ContainerLoader>
				<img
					src={loader}
					alt='carregando'
				/>
			</ContainerLoader>
		</Overlay>
	);
}
