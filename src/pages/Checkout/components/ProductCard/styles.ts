import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding-block: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  .control-product {
    display: flex;
    gap: 1.25rem;

    div {
      h3 {
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors['base-subtitle']};
      }
    }

    .button-group {
      margin-top: .5rem;

      display: flex;
      align-items: center;
      gap: .5rem;
    }
  }

  & > span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-text']};
  }
`;

export const QuantityProducts = styled.div`
  height: 2rem;
  padding-inline: .5rem;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors['base-button']};

  display: flex;
  align-items: center;
  gap: .5rem;

  font-size: .875rem;

  button {
    cursor: pointer;

    &:hover {
      svg {
        fill: ${({ theme }) => theme.colors['purple-dark']};
      }
    }
  }
`;

export const ButtonRemover = styled.button`
  padding: .5rem;
  background: ${({ theme }) => theme.colors['base-button']};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['base-text']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: .25rem;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`;
