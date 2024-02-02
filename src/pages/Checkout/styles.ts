import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  margin-top: 9rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
  }
`;

export const FormGroup = styled.form``;

export const FormContainer = styled.div`
  margin-top: .9375rem;
  padding: 2.5rem;
  width: 40rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;

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

export const Form = styled.div`
  margin-top: 2rem;

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

    &:focus {
      border-color: ${({ theme }) => theme.colors['yellow-dark']};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
      font-size: .875rem;
    }
  }

  & > input:first-child {
    width: 12.5rem;
  }

  div {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
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
