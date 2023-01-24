import styled from 'styled-components';

export const ContainerHome = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px 180px 80px;

	@media screen and (max-width: 800px) {
		padding: 80px 100px;
	}

	h1 {
		color: #cfa75c;
		text-shadow: 0 0 12px black;
	}
`;




export const ContentHome = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 60px;
	padding: 20px 0 40px;
`;

export const CardListContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
	justify-content: center;
	align-items: center;
`;

export const SearchContainer = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 12px;
	align-items: center;

	label {
		color: whitesmoke;
		font-size: 16px;
	}

	input {
		border-radius: 4px;
		padding: 8px;
		font-size: 12px;
		outline: none;
		border: none;
		border-bottom: 2px solid lightgrey;
		background-color: rgba(0, 0, 0, 0.3);
		transition: all 0.4s ease;
		color: whitesmoke;
		width: 100%;
		backdrop-filter: blur(7px);

		:focus {
			border-bottom: 2px solid #0bc6e3;
		}
	}
`;

export const SearchButton = styled.button`
	padding: 8px;
	font-size: 20px;
	color: whitesmoke;
	font-weight: bolder;
	border-radius: 50%;
	transition: 0.4s ease;
	line-height: 1.4px;

	:hover {
		box-shadow: 0 0 8px #0bc6e3;
		color: #0bc6e3;
	}
`;

export const FilterButton = styled.button`
	padding: 4px 16px;
	border-radius: 4px;
	color: whitesmoke;
	border-bottom: 2px solid lightgrey;
	text-shadow: 0 0 16px black;
	transition: all 0.3s ease;
	font-weight: lighter;
	font-size: 10px;
	font-weight: bold;

	:hover {
		border-bottom: 2px solid #0bc6e3;
		color: #0bc6e3;
	}

	:focus {
		background-color: #0bc6e3;
		border-bottom: none;
		transform: scale(1.2);
		color: black;
	}
`;

export const FilterContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 16px;
	width: 100%;
	align-items: center;
`;
