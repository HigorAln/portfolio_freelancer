import styled from 'styled-components'


export const ContentButtonFlutuer = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  font-size:40px;
  transition: all 0.2s ;
  background-color:var(--gray-light) ;
  border:0;
  box-shadow: 0 0 10px var(--gray-dark);

  svg {
    color: var(--black);
  }

  &:hover{
    background-color:var(--pink);
    
    svg {
      color: white;
    }
  }
`