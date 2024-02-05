import styled, { css } from 'styled-components';

export const CheckoutContainer = styled.div`
  margin-top: 9rem;
`;

export const FormGroup = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
  }
`;

export const Form = styled.div`
  margin-top: 0.9375rem;

  background: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  width: 40rem;
  border-radius: 6px;

  header {
    margin-bottom: 2rem;

    display: flex;
    gap: .5rem;
    align-items: start;

    div {
      line-height: 130%;
      display: block;

      h3 {
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors['base-subtitle']};
      }

      p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors['base-text']};
      }
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    padding-inline: .75rem;
    height: 2.625rem;
    outline: none;
    border: 1.75px solid ${({ theme }) => theme.colors['base-button']};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors['base-input']};
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: .875rem;
    font-weight: 400;

    &[type=number]::-webkit-outer-spin-button,
    &[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors['yellow-dark']};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
      font-size: .875rem;
    }

    &:disabled {
    cursor: not-allowed;
  }
  }

  & > input:first-child {
    width: 12.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: .75rem;

    .input {
      width: 100%;
      height: 2.625rem;
      padding-right: .75rem;
      background: ${({ theme }) => theme.colors['base-input']};
      border: 1.75px solid ${({ theme }) => theme.colors['base-button']};
      border-radius: 4px;
      flex: 1;

      input {
        width: 100%;
        background: none;
        border: 0;
      }

      small {
        font-style: italic;
        font-size: .75rem;
        color: ${({ theme }) => theme.colors['base-label']};
      }

      &:focus-within {
        border: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
      }
    }
  }

  .location {
    div {
      width: 100%;
      display: flex;

      input:last-child {
        width: 100%;
      }
    }

    & > input:last-child {
      width: 3.75rem;
    }
  }
`;

export const FormPaymentContiner = styled.div`
  margin-top: .75rem;
  margin-bottom: 15rem;
  padding: 2.5rem;
  width: 40rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-card']};

  header {
    display: flex;
    gap: .5rem;
    align-items: start;

    div {
      line-height: 130%;

      h3 {
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors['base-subtitle']};
      }

      p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors['base-text']};
      }
    }
  }
`;

export const FormPaymentGroup = styled.div`
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface PaymentButtonProps {
  $payment: boolean;
}

export const PaymentButton = styled.button<PaymentButtonProps>`
  width: 11.166875rem;
  padding-block: 1.09375rem;
  background: ${({ theme }) => theme.colors['base-button']};
  text-transform: uppercase;
  font-size: .75rem;
  color: ${({ theme }) => theme.colors['base-text']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .75rem;

  outline: none;
  border: 2px solid transparent;
  border-radius: 6px;

  cursor: pointer;
  transition: background .1s;

  ${({ $payment }) => $payment && css`
    border: 2px solid ${({ theme }) => theme.colors.purple};
  `}

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.purple};
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  &:disabled {
    cursor: not-allowed;
  }
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
