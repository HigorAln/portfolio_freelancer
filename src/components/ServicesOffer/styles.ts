import styled from 'styled-components'


export const ContentServices = styled.div`
  padding: 50px 100px;
  display:flex;
  width:100%;
  justify-content: center;
  user-select: none;
`

export const Content = styled.div`
  width:930px;
  display: flex;
  flex-direction:column;
  align-items:center;
  

  > h1{
    align-self: flex-start ;
    margin-bottom:50px;
  }

  span{
    display: grid;
    grid-template-columns: repeat(3, 300px) ;
    grid-template-rows: repeat(2, 300px) ;
    gap:10px;
    
  }
`
