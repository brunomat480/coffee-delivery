import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  margin-top: 9rem;
`;

export const FormGroup = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;



export const CartContainer = styled.div`
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
  }
`;

export const Cart = styled.div`
  width: 28rem;
  padding: calc(2.5rem - 1.5rem) 2.5rem 2.5rem;
  margin-top: 0.9375rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
`;

export const PricesGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;

  margin-top: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;

    small {
      font-size: .875rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors['base-text']};
    }

    span {
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors['base-text']};
    }

    &:last-child {
      span {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors['base-subtitle']};
      }

      small {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors['base-subtitle']};
      }
    }
  }


`;

export const ButtonContainer = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding-block: .75rem;
  background: ${({ theme }) => theme.colors.yellow};
  border-radius: 6px;

  font-size: .75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  transition: background .1s;
  cursor: pointer;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['yellow-dark']};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors['base-hover']};
    cursor: not-allowed;
  }
`;
