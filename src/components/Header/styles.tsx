import styled from 'styled-components';

export const MainContainerHeader = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	justify-content: space-between;
	align-items: center;
	padding: 0px 20px;
	width: 100%;
	height: 60px;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	z-index: 10;

	h1 {
		text-align: center;
		user-select: none;
	}
	div {
		display: flex;
		justify-content: center;
		gap: 20px;

		a {
			font-weight: 500;
			text-decoration: none;
			color: currentColor;
			transition: all 0.2s;

			&:hover {
				color: var(--pink);
			}
		}
	}
	span {
		display: flex;
		gap: 20px;
		svg {
			font-size: 25px;
			color: white;
			transition: all 0.2s;

			:hover {
				color: var(--pink);
				cursor: pointer;
			}
		}
	}
`;
