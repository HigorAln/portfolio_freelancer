import styled from 'styled-components'


export const ContentModalHeader = styled.div`
  position: fixed;
  top:0;
  bottom:0;
  right:0;
  left:0;
  height:100vh;
  width:100%;
  z-index: 1000;
  background-color: var(--gray-dark);

  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  .close_button {
    background-color:transparent ;
    border:0;
    width: fit-content;
    height: fit-content;
    color: var(--white);
    position: absolute;
    right: 200px;
    top:100px;
    font-size:30px;

    &:hover {
      color: var(--gray-light);
    }

    @media (max-width: 950px){
      right: 70px;
    }
    @media (max-width: 650px){
      top: 60px;
      right: 50px;
    }
    @media (max-width: 450px){
      top: 30px;
      right: 18px;
    }
  }

  h1, h2 {
    color: var(--gray-light);
    font-size: 2.5rem;
  }
  h2{
    font-size:2rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items:center;
    width:400px ;
    margin-top:50px;

    a {
      text-decoration:none ;
      color:var(--gray-light);
      font-size: 40px;

      :hover {
        color:var(--pink);
      }
    }
    span {
      ::after {
        content: '';
        display: block;
        pointer-events: none;        
        width: 40px;
        height: 2px;
        background-color: var(--gray-light);
        margin: 15px auto;
      }
    }
  }


`