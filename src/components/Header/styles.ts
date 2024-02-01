import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding-block: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: .75rem;

    a {
      padding: .5rem;
      border-radius: 6px;

      background: ${({ theme }) => theme.colors['yellow-light']};
    }
  }
`;

export const Location = styled.span`
  padding: .5rem;
  font-size: .875rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: .25rem;

  background: ${({ theme }) => theme.colors['purple-light']};
  color: ${({ theme }) => theme.colors['purple-dark']};
`;
