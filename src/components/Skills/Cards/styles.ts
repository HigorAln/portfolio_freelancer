import styled, { css } from 'styled-components';

interface ContentCardsProps {
	isActive: boolean;
}

export const ContentCards = styled.div<ContentCardsProps>`
	background-color: var(--black);
	height: 450px;
	width: 400px;
  position: relative;

	padding: 20px 20px 20px 30px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;

  @media (max-width: 530px){
    width: 350px;
  }

	p {
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 1px;
	}

	h1 {
		margin-top: 30px;
		font-size: 48px;
		align-self: flex-end;
		background: -webkit-linear-gradient(var(--pink), var(--purple));
		${({ isActive }) =>
			isActive &&
			css`
				background: -webkit-linear-gradient(
					var(--gray-dark),
					var(--gray-light)
				);
			`}
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
  
  div {
    position: absolute;
    top:15px;
    right:15px;

    border-top: 5px solid var(--purple);
    border-right: 5px solid var(--purple);

    width: 30px;
    height: 30px;
  }


  @media (max-width: 450px){
    width: 300px;
    height: 350px;

    p {
      font-size:15px
    }

    h1 {
      font-size: 40px;
    }
  }

`;
