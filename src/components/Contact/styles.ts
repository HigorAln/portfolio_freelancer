import styled from 'styled-components'


export const ContentContact = styled.div`
  display:flex;
  width:100%;
  padding:0px 100px;
  justify-content:center;
  padding-bottom:100px;
  padding-top: 100px;
  margin-top:100px;

  @media (max-width: 1300px){
    padding: 0 20px
  }
  @media (max-width: 1000px){
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top:50px;
    margin-bottom:100px;
  }
  

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

    @media (max-width: 1100px){
      h1 {
        font-size: 1.2rem;
      }
      p{
        font-size: 0.9rem;
      }
    }
    @media (max-width: 1000px){
      align-self: flex-start;  
      padding-left: 130px;;
      margin-bottom:20px;
      width: 100%;
    }
    @media (max-width: 600px){
      padding-left: 20px;
    }
    @media (max-width: 450px){
      padding-left:0px;
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


    @media (max-width: 1100px){
      h1 {
        font-size:1rem;
      }
    }

    span{
      display:flex;
      flex-direction:column;
      align-items: flex-end;

      @media (max-width: 1000px){
        align-items: center;
      }

      h1 {
        font-size: 1.8rem;
        margin-bottom:15px;
        font-weight:500;
      }

      form{
        display:flex;
        flex-direction:column;
        width:600px;

        @media (max-width: 1000px){
          width: 100%;
        }
        @media (max-width: 570px){
          width: 400px;
          button {
            align-self: center;
          }
        }
        @media (max-width: 420px){
          width: 100%;
        }

        input, textarea{
          background-color:var(--black);
          border:0;
          padding: 10px;
          width: 100%;
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