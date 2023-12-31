import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      list-style: none;
      text-decoration: none;
   }

   html{
   font-size: 62.5%;
   }

   body{
   font-size: 1.6rem;
   font-family: 'Roboto', sans-serif;
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
   color: ${({ theme }) => theme.COLORS.WHITE};
     }

     @media(max-width: 800px){
      html{
         font-size: 50%;
      }
     }


`;
