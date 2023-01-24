import styled from 'styled-components';
import { BtnSubmit } from '../../pages/Login/style';

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	width: 180px;
	height: 248px;
	cursor: pointer;
	border: 1px solid rgba(255, 255, 255, 0.2);
	background-color: rgba(0, 0, 0, 0.2);
	color: black;
	backdrop-filter: blur(7px);
	box-shadow: 0 0 16px black;
	margin-bottom: 24px;
	transition: all 0.3s ease;
	position: relative;
	overflow: hidden;

	p {
		list-style: none;
		text-align: center;
		padding: 2px;
		opacity: 0;
		z-index: 9999999;
		transition: all 0.3s ease;
	}

	img {
		width: 300px;
		height: 300px;
		object-fit: cover;
		position: absolute;
		align-self: center;
		border-radius: 8px;
		transition: all 0.3s ease-in-out;
	}

	strong {
		color: #cfa75c;
		font-size: 16px;
	}

	:hover {
		p {
			opacity: 1;
			transform: translateY(-65px);
		}

		img {
			transform: scale(1.12);
		}

		button {
			opacity: 1;
			transform: translateY(-70px);
		}
	}
`;

export const CardContent = styled.div`
	position: absolute;
	width: 100%;
	transform: translateY(250px);
	text-shadow: 0 0 8px black;

	p {
		color: whitesmoke;
		font-size: 12px;
		letter-spacing: 1px;
		font-weight: bold;
	}
`;

export const CardButton = styled(BtnSubmit)`
	font-size: 12px;
	width: 100%;
	opacity: 0;
	transition: all 0.4s ease;
	text-shadow: 0 0 8px black;
`;
