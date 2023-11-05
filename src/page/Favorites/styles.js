import styled from "styled-components";

export const Container = styled.div`

   h1{
      text-align: center;
      margin-top: 3rem;
   }
   
   ul{
     width: 60rem ;
     margin: 0 auto;
     margin-top: 4rem;
     padding: 0 1rem;
   }

   ul li{
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
   }

   li .btn{
      display: flex;
      align-items: center;
      gap: 1rem;
   }

   li .btn a{
      color: ${({ theme })=> theme.COLORS.PURPLE};
   }

   li .btn button{
      padding: .8rem 2rem;
      cursor: pointer;
   }

   @media(max-width:500px){
      ul{
         width: 40rem;
      }
   }
`;