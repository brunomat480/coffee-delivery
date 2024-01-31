import styled from 'styled-components';


export const HomeContainer = styled.section`
  margin-top: 5.875rem;

  display: flex;
  align-items: center;
  gap: 3.5rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      line-height: 4.025rem;
    }

    p {
      font-size: 1.25rem;
      margin-top: 1rem;
    }

  }

`;

// export const ItemsContainer = styled.div`
//   display: flex;
//   gap: 2.5rem;
// /*
//   span {
//     margin-right: .75rem;

//     font-size: 1rem;
//     color: ${({ theme }) => theme.colors['base-text']};
//   } */
// `;

// export const ItemsGroup = styled.div`

// `;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const ItemsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;


  span {
    margin-left: .75rem;

    font-size: .90rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['base-text']};
  }
`;

const ITEMS_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  base: 'base-text',
  purple: 'purple',
} as const;

interface ItemProps {
  itemColor: keyof typeof ITEMS_COLORS;
}

export const Item = styled.div<ItemProps>`
  padding: .5rem;
  border-radius: 9999px;

  background: ${({ theme, itemColor }) => theme.colors[ITEMS_COLORS[itemColor]]};

  display: inline-flex;
`;
