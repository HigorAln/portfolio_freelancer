import styled from 'styled-components';

export const ContentApresentation = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	position: relative;
	margin-bottom: 100px;
	overflow-x: hidden;

	@media (max-width: 500px) {
		margin-bottom: 0px;
	}
`;

export const Left = styled.div`
	width: 50vw;
	display: flex;
	flex-direction: column;
	height: 100%;
	align-items: flex-end;
	justify-content: center;
	padding-right: 80px;
	background-color: var(--black);

	div {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 50%;

		h1 {
			font-size: 80px;
			z-index: 10;
		}

		button {
			width: fit-content;
			padding: 8px 70px;
			align-self: center;
			transition: all 0.2s;

			:hover {
				opacity: 80%;
			}
		}
	}

	@media (max-width: 1100px) {
		div {
			width: 70%;
		}
	}
	@media (max-width: 950px) {
		div {
			width: 80%;
		}
	}
	@media (max-width: 950px) {
		div {
			width: 90%;
		}
	}
	@media (max-width: 750px) {
		div {
			width: 80%;

			h1 {
				font-size: 60px;
			}

			button {
				padding: 8px 50px;
			}
		}
	}
	@media (max-width: 650px) {
		div {
			h1 {
				font-size: 50px;
			}

			h2 {
				z-index: 10;
				line-height: 0px;
			}

			button {
				padding: 5px 30px;
			}
		}
	}
	@media (max-width: 550px) {
		padding-right: 30px;
		div {
			h1 {
				font-size: 50px;
			}

			button {
				padding: 5px 30px;
				font-size: 15px;
			}
		}
	}
	@media (max-width: 450px) {
		padding-top: 50px;
		div {
			h1 {
				margin-bottom: 45px;
			}
		}
	}
	@media (max-width: 450px) {
		div {
			button {
				font-size: 12px;
			}
		}
	}
`;

export const Right = styled.div`
	width: 50vw;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-top: 120px;
	padding-left: 80px;
	z-index: 1;

	h1 {
		font-size: 80px;
	}

	@media (max-width: 1000px) {
		padding-left: 50px;
		h1 {
			font-size: 60px;
		}
	}
	@media (max-width: 750px) {
		padding-left: 30px;
		h1 {
			font-size: 50px;
		}
	}
	@media (max-width: 550px) {
		padding-left: 0px;
	}
	@media (max-width: 530px) {
		h1 {
			margin-left: -20px;
		}
	}
	@media (max-width: 450px) {
		h1 {
			margin-left: -60px;
		}
	}
	@media (max-width: 450px) {
		padding-top: 80px;
		h1 {
			margin-left: -80px;
		}
	}
`;

export const Image = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 350px;
	z-index: 0;

	@media (max-width: 780px) {
		width: 300px;
	}
	@media (max-width: 630px) {
		width: 250px;
	}
	@media (max-width: 450px) {
		width: 250px;
	}
`;
