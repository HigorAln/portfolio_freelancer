import styled from 'styled-components'


export const ContentContact = styled.div`
  display:flex;
  width:100%;
  padding:0px 100px;
  justify-content:center;
  padding-bottom:100px;
  padding-top: 100px;
  margin-top:100px

  div{
    display:flex;
    flex-direction:column;
  }

  div:nth-child(1){
    width:50%;
    gap: 10px;
    padding-left: 100px;

    h1{
      font-size:1.8rem ;
    }
    p{
      font-size: 1.3rem;
    }

    span {
      display:flex;
      gap: 20px;
      margin-top:15px;

      a, button{
        color: currentColor;
        font-size: 28px;
        transition: all .2s;
        cursor: pointer;

        &:hover{
          color: var(--pink);
        }
      }

      button {
        background-color: transparent;
        height: 30px;
        border:0;
      }

    }
  }

  div:nth-child(2){
    display: flex;

    span{
      display:flex;
      flex-direction:column;
      align-items: flex-end;

      h1 {
        font-size: 1.8rem;
        margin-bottom:15px;
        font-weight:500;
      }

      form{
        display:flex;
        flex-direction:column;
        width:600px;

        input, textarea{
          background-color:var(--black);
          border:0;
          padding: 10px;
          border-radius: 10px;
          color: white;
          outline:none;
          font-size:18px;
          resize:none ;
          margin-top:15px;
        }

        button {
          padding: 5px;
          color: white;
          background-color:var(--black) ;
          border:0;
          border-radius: 0.5rem;
          font-size: 18px;
          width: 300px;
          height: 60px;
          transition: all 0.2s ;
          margin-top:15px;

          &:hover {
            background-color: var(--pink);
            color: var(--black)
          }
        }


        p{
          color: var(--pink);
          font-size: 0.7rem;
          margin-top:5px;
        }
      }
    }

  }
`