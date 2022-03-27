import styled from 'styled-components';

interface IContentCardServices {
  active?: boolean;
}

export const ContentCardServices = styled.nav<IContentCardServices>`
  border:1px solid ${({ active }) => (active ? 'white' : "var(--pink)")};
  border-radius:5px;
  width:100%;
  height:100%;
  padding: 20px 20px;

  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap: 10px;

  text-align: center;

  svg {
    font-size:45px;
  }

  h1{
    font-weight:600;
  }
  p{
    font-weight:500;
  }

`