import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 16rem;
  /* height: 19.375rem; */
  text-align: center;
  padding-inline: 1.25rem;
  padding-bottom: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;

  img {
    margin-top: -1.2rem;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;

    margin-top: 1.25rem;
  }

  p {
    font-size: .875rem;
    line-height: 1.1375rem;
    color: ${({ theme }) => theme.colors['base-label']};

    margin-top: .5rem;
  }

  .types {
    display: flex;
    align-items: center;
    gap: .25rem;
  }
`;

export const Type = styled.span`
  padding: .25rem .5rem;
  margin-top: .75rem;
  background: ${({ theme }) => theme.colors['yellow-light']};
  border-radius: 100px;

  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['yellow-dark']};
`;

export const ProductControls = styled.div`
  width: 100%;
  margin-top: 2.0625rem;

  display: flex;
  align-items: center;
  justify-content: space-around;


  & > div {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
`;

export const Price = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors['base-text']};

  small {
    font-family: 'Roboto', sans-serif;
    font-size: .875rem;
    font-weight: 400;
  }
`;

export const Quantity = styled.div`
  height: 2.375rem;
  padding: .5rem;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors['base-button']};

  display: flex;
  align-items: center;
  gap: .5rem;

  font-size: .875rem;

  button {
    line-height: 0;
  }
`;

export const ButtonAddProduct = styled.button`
  padding: .5rem;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors['purple-dark']};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.purple};
  }
`;
