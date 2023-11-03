import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;

  h1{
   font-size: 8rem;
  }

  h2{
   font-size: 3rem;
  }

  a {
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    color: #fff;
    padding: 1.5rem;
    border-radius: 4px;
    margin-top: 2rem;
  }

  a:hover {
    background-color: #9466ff;
    transition: 2s;
  }
`;
