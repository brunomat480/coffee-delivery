import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div {
    h3 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      color: ${({ theme }) => theme.colors['yellow-dark']};
    }

    p {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  }
`;

export const PurchaseNotice = styled.div`
  width: 32.8125rem;
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 6px 36px;
  margin-top: 2.5rem;
  padding: 2.5rem 0 2.5rem 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: .75rem;

    span {
      font-size: 1rem;
      line-height: 130%;
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  }
`;

const ITEMS_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
} as const;

interface ItemProps {
  $itemColor: keyof typeof ITEMS_COLORS;
}

export const Item = styled.div<ItemProps>`
  padding: .5rem;
  border-radius: 9999px;
  display: inline-flex;

  background: ${({ theme, $itemColor }) => theme.colors[ITEMS_COLORS[$itemColor]]};
`;
