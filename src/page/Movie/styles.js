import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;
  color: #fff;

  h2 {
    margin-bottom: 1rem;
    font-weight: 500;
  }

  h3 {
    margin-top: 0.5rem;
  }

  p {
    margin-top: 0.8rem;
  }

  .vote {
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    display: flex;
    justify-content: center;
    border-radius: 5px;
    padding: 1rem;
  }

  .btn button {
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 5px;
    margin-right: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;
  }

  .btn a{
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`;
