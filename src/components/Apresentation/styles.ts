import styled from 'styled-components';

export const ContentApresentation = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	position: relative;
  margin-bottom:100px;
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
`;

export const Image = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 350px;
	z-index: 0;
`;
