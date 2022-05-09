import styled from 'styled-components';

interface IContentWork {
	url: string;
	color: string;
}

export const ContentWork = styled.div<IContentWork>`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 100px;
	height: 100%;
	position: relative;
	padding-top: 50px;

	@media (max-width: 500px) {
		margin-bottom: 30px;
	}

	> div {
		background-image: url(${props => props.url});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: bottom;
		filter: brightness(0.3);
		height: 600px;
		width: 70%;
		border-radius: 5px;

		@media (max-width: 1000px) {
			width: 90%;
		}
		@media (max-width: 770px) {
			height: 500px;
		}
		@media (max-width: 550px) {
			height: 350px;
		}
	}

	> span {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;

		h1 {
			font-size: 48px;
		}

		span {
			width: 100%;
			display: flex;
			gap: 20px;
			justify-content: center;

			nav {
				display: inline-block;
				width: 50px;
				height: 50px;
				border-radius: 50%;
				background: linear-gradient(
					to bottom,
					${props => props.color} 5%,
					transparent
				);
			}
		}

		@media (max-width: 770px) {
			top: 35%;
			text-align: center;

			h1 {
				font-size: 35px;
				line-height: 35px;
				margin-bottom: 20px;
			}
		}
		@media (max-width: 550px) {
			top: 25%;

			span {
				nav {
					width: 40px;
					height: 40px;
				}
			}
		}
	}

	> section {
		position: absolute;
		right: 0;
		bottom: 100px;
		background-color: var(--gray-dark);
		width: 400px;
		height: 150px;
		box-shadow: 0 3px 10px #000;
		padding: 10px;
		padding-left: 30px;
		padding-top: 20px;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		border-left: 3px solid ${props => props.color};

		div {
			display: flex;
			gap: 10px;

			.space {
				margin-right: 60px;
			}
			a {
				color: ${props => props.color};
				font-weight: 500;
			}
		}

		span {
			p {
				font-size: 13px;
				font-weight: 500;
			}
		}

		@media (max-width: 1000px) {
			bottom: 40px;
		}
		@media (max-width: 550px) {
			width: 320px;
			height: 120px;

			div {
				font-size: 12px;
			}

			span {
				p {
					font-size: 10px;
				}
			}
		}
	}
`;
