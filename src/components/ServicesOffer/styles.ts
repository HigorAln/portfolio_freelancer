import styled from 'styled-components';

export const ContentServices = styled.div`
	padding: 50px 100px;
	display: flex;
	width: 100%;
	justify-content: center;
	user-select: none;
	overflow-x: hidden;

	@media (max-width: 550px) {
		padding: 50px 50px;
	}
	@media (max-width: 450px) {
		padding: 50px 20px;
	}
`;

export const Content = styled.div`
	width: 930px;
	display: flex;
	flex-direction: column;
	align-items: center;

	> h1 {
		align-self: flex-start;
		margin-bottom: 50px;
	}

	span {
		display: grid;
		grid-template-columns: repeat(3, 300px);
		grid-template-rows: repeat(2, 300px);
		gap: 10px;

		@media (max-width: 950px) {
			width: 860px;
			grid-template-columns: repeat(3, 280px);
		}

		@media (max-width: 863px) {
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			gap: 0;
		}
	}

	@media (max-width: 950px) {
		width: 860px;
	}
`;
