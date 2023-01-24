import styled from 'styled-components';

export const ProfileContainer = styled.div`
	min-height: 100vh;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(3px);
`;

export const ProfileHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #262626;
	
`;

export const ImageSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 24px;
	gap: 20px;
	color: whitesmoke;



	img {
		border-radius: 50%;
		border: 1px solid #0bc6e3;
		width: 240px;
		height: 240px;
		object-fit: cover;
		object-position: center;
		padding: 12px;
		box-shadow: 0 0 20px #0bc6e3;
	}

	h3 {
		text-align: center;
		font-size: 24px;
		font-weight: bold;
	}
`;

export const DescriptionSection = styled.div`
	display: flex;
	flex-direction: column;
	text-shadow: 0 0 8px black;
	color: whitesmoke;
	width: 50%;
	text-align: center;
	gap: 100px;
	padding: 40px;


	h1 {
		color: #cfa75c;
		font-size: 40px;
		animation: TitleAnimation 2.5s ease forwards;

		small {
			color: whitesmoke;
		}
	}

	p {
		font-size: 20px;
		border-bottom: 2px solid #0bc6e3;
		padding: 8px 32px;
		margin: 0 auto;
		border-radius: 12px;
	}

	@keyframes TitleAnimation {
		0% {
			opacity: 0;
			transform: translate(-25px, -25px);
			filter: blur(7px);
		}

		100% {
			opacity: 1;
			transform: none;
		}
	}
`;

export const ProfileContent = styled.main`
	display: flex;
	flex-direction: column;
	color: whitesmoke;
	justify-content: center;
	align-items: center;
	gap: 24px;
	padding: 40px;
	border-top: 2px solid #111111;

	h2 {
		font-size: 28px;
	}
`;

export const CardList = styled.div`
	display: flex;
`;
