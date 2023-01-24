import styled from 'styled-components';
import './index';

export const ChampionContainer = styled.div`
	height: 80vh;
	width: 100%;
	overflow-y: hidden;
	@media screen and (max-width: 930px) {
		height: 82vh;
	}

	img {
		width: 100%;
		height: 140%;
		object-fit: cover;
		transform: scale(0.7) translateY(-130px);
		border-radius: 24px;
		box-shadow: 0 0 12px black;

		@media screen and (max-width: 930px) {
			transform: scaley(0.68) scalex(0.8) translateY(-200px);
		}
	}

	h1 {
		transform: translateY(-760px);
		color: #cfa75c;
		margin-left: 250px;
		text-shadow: 0 0 12px black;
		font-size: 48px;

		@media screen and (max-width: 930px) {
			transform: translateY(-480px);
			margin-left: 56px;
			font-size: 40px;
		}
	}
`;

export const ChampionContent = styled.div`
	transform: translateY(-470px);
	color: whitesmoke;
	text-align: center;
	display: flex;
	justify-content: space-evenly;
	gap: 44px;
	width: 65%;
	margin: 0 auto;

	@media screen and (max-width: 930px) {
		transform: translateY(-460px);
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const ChampionDescription = styled.div`
	border: 1px solid rgba(255, 255, 255, 0.2);

	height: 22vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(7px);
	box-shadow: 0 0 8px black;
	padding: 8px;

	strong {
		font-size: 28px;
		color: #cfa75c;
		text-shadow: 0 0 8px black;
		margin: 10px 0;
	}

	p {
		font-size: 18px;
		text-shadow: 0 0 8px black;
		font-family: 'Montserrat', sans-serif;
		letter-spacing: 1px;
	}

	@media screen and (max-width: 930px) {
		display: none;
		strong {
			font-size: 24px;
			margin: 0 0 8px 0;
		}

		p {
			font-size: 16px;
		}
	}
`;

export const ChampionStats = styled(ChampionDescription)`
	flex-direction: column;

	> div {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		gap: 24px;
		font-weight: bold;
	}

	@media screen and (max-width: 930px) {
		width: 100%;
		min-width: max-content;
		height: 100%;
		min-height: max-content;
		display: block;

		strong {
			font-size: 24px;
		}

		p {
			font-size: 20px;
		}
	}
`;
