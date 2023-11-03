import styled from "styled-components";

export const Container = styled.div`
  max-width: 150rem;
  margin: 1rem auto;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  article {
    max-width: 100%;
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
  }

  img {
    display: block;
    width: 100%;
    max-height: 450px;
    margin: 0 auto;
    object-fit: cover;

    border-radius: 1rem 1rem 0 0;
  }

  a {
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 0 0 1rem 1rem;
  }

  a:hover {
    background-color: #9466ff;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`;
