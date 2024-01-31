import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  text-align: center;

  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;

  img {
    margin-top: -1rem;
  }
`;


export const Quantity = styled.div``;
