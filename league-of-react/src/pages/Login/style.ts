import styled from 'styled-components';

export const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 70vh;
	padding: 24px;
	overflow: hidden;
`;
export const LoginTitle = styled.h1`
	margin: auto 0 12px;
	color: #cfa75c;
	text-shadow: 0 0 12px black;
	text-align: center;
	font-size: 32px;
	letter-spacing: 0.5px;
`;

export const LoginFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	border-radius: 12px;
	padding: 16px;
	height: max-content;
	background-color: rgba(0, 0, 0, 0.3);
	border: 1px solid rgba(255, 255, 255, 0.1);
	box-shadow: 0 0 12px black;
	backdrop-filter: blur(6px);
	min-width: 380px;
	margin: auto 0;

	a {
		text-align: center;
		font-size: 16px;
		padding: 8px;
		border-radius: 8px;
		margin: 8px 0;
		letter-spacing: 0.5px;
		transition: all 0.4s ease;
		border: 1px solid transparent;
		border: 1px solid lightgrey;

		:hover {
			color: #0bc6e3;
			border: 1px solid #0bc6e3;
		}
	}
`;


export const FormItem = styled(LoginContainer)`
	height: auto;
	padding: 0;
	margin-bottom: 8px;
	align-items: flex-start;

	label {
		color: whitesmoke;
		margin: 8px 0;
		font-size: 16px;
	}

	input {
		border-radius: 4px;
		padding: 8px;
		font-size: 12px;
		outline: none;
		border: none;
		border-bottom: 2px solid lightgrey;
		background-color: transparent;
		transition: all 0.4s ease;
		color: whitesmoke;
		width: 100%;

		:focus {
			border-bottom: 2px solid #0bc6e3;
		}
	}
`;

export const BtnSubmit = styled.button`
	margin: 12px 0;
	padding: 8px;
	border-radius: 8px;
	border: 0.1px solid #0bc6e3;
	color: whitesmoke;
	font-size: 16px;
	font-weight: bold;
	transition: all 0.4s ease;
	background-color: #0bc6e3;

	:hover {
		box-shadow: 0 0 12px #0bc6e3;
	}

	:disabled {
		filter: grayscale();
		box-shadow: none;
		cursor: default;
	}
`;
