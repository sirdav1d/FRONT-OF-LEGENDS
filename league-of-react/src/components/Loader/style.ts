import styled from 'styled-components';

export const ContainerLoader = styled.div`
	display: flex;
	z-index: 99999999999999999;
	padding: 0;
	margin: auto;
	height: 100vh;
	width: 100vw;
	overflow: hidden;

	img {
		transform: scale(0.9);
		opacity: 0.8;
		margin: auto;
		align-self: center;
	}
`;

export const Overlay = styled.div`
	height: 100vh;
	width: 100vw;
	z-index: 9999999999999999;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(7px);
	overflow: hidden;
	padding: 0;
	margin: 0;
`;