import styled from "styled-components";

export const Container = styled.div`

  span{
   text-align: center;
   padding-top: 2rem;
   display: block;
   font-size: 2rem;
  }

   h1{
      text-align: center;
      margin-top: 5rem;
   }
   
   ul{
     width: 65rem ;
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
      color: ${({ theme })=> theme.COLORS.BACKGROUND};
   }

   @media(max-width:500px){
      ul{
         width: 40rem;
      }
   }
`;