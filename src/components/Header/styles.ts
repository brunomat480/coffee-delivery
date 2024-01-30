import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding-block: 2rem;

  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: .75rem;

    span {
      padding: .5rem;

      display: flex;
      align-items: center;
      gap: .25rem;

      background: ${({ theme }) => theme.colors['purple-light']};
      color: ${({ theme }) => theme.colors['purple-dark']};

      font-size: .875rem;
      border-radius: 6px;
    }

    a {
      padding: .5rem;
      border-radius: 6px;

      background: ${({ theme }) => theme.colors['yellow-light']};
    }

  }
`;
