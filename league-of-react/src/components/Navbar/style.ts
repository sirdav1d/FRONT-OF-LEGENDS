import styled from 'styled-components';

export const NavContainer = styled.div`
	background-color: #262626;
	color: whitesmoke;
	font-size: 12px;
	border-bottom: 2px solid #111;

	nav {
		display: flex;
		justify-content: space-around;
		padding: 20px;

		img {
			width: 40px;
			object-fit: contain;
		}
	}

	ul {
		display: flex;
		align-items: center;
		justify-content: space-around;
		list-style: none;
		width: 200px;

		li {
			text-align: center;
			font-size: 20px;
			padding: 8px;
			transition: 0.4s ease;
			cursor: pointer;
			border-radius: 200px;
			line-height: 1.4px;
			color: whitesmoke;

			:hover {
				color: #0bc6e3;
			}

			:active {
				color: whitesmoke;
			}
		}
	}

	.home {
		color: #0bc6e3;
		box-shadow: 0px 0px 8px #0bc6e3;
	}

	.profile {
		color: #0bc6e3;
		box-shadow: 0px 0px 8px #0bc6e3;
	}

	.settings {
		color: #0bc6e3;
		box-shadow: 0px 0px 8px #0bc6e3;
	}
`;
