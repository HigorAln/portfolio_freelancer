import styled, { css } from 'styled-components';

interface IContentCardServices {
	active?: boolean;
}

export const ContentCardServices = styled.nav<IContentCardServices>`
	border: 1px solid ${({ active }) => (active ? 'white' : 'var(--pink)')};
	border-radius: 5px;
	width: 100%;
	height: 100%;
	padding: 20px 20px;
	transform: scale(0.9);
	transition: all 0.2s;
	${({ active }) =>
		!active &&
		css`
			color: gray;
		`}

	&:hover {
		transform: scale(1);
	}

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 10px;

	text-align: center;

	svg {
		font-size: 45px;
	}

	h1 {
		font-weight: 600;
	}
	p {
		font-weight: 500;
	}

	@media (max-width: 863px) {
		width: 100%;
		height: 200px;
	}

	.not_offer {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		h1 {
			color: var(--pink);
			transform: rotate(45deg);
		}
	}
`;
