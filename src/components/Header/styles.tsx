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

  @media (max-width: 800px){
    grid-template-columns: 1fr 2fr 1fr ;
  }

  @media (max-width: 450px){
    display:flex ;
    justify-content:space-between ;

  }

  nav{
    display:flex;
    justify-content:center;
    
    img {
      width:135px;
      align-self:center;
    }
  }
	div {
		display: flex;
		justify-content: center;
		gap: 20px;

    @media (max-width: 800px){
      visibility:hidden;
    }
    @media (max-width: 450px){
      display:none ;
    }

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


    button {
      display: none;
      background-color:transparent ;
      border: 0;
      height:fit-content;
      width:fit-content;

      @media (max-width: 800px){
        display: flex ;
      }
    }
	}
`;
