import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid #ffffff46;

  .logo {
    font-size: 1.5em;
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;
    font-weight: bold;
  }

  .logo span {
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }

  a {
    font-size: 1.3rem;
  }

  .btn {
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.PURPLE};
    color: #fff;
    padding: 1.5rem;
    border-radius: 4px;
  }

  .btn:hover {
    background-color: #9466ff;
  }
`;
