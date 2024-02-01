import styled from 'styled-components';


export const HeaderContainer = styled.section`
  margin-top: 5.875rem;
  margin-bottom: 5.75rem;

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

  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
      h1 {
        text-align: center;
        font-size: 2rem;
        line-height: 2rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.4rem;
        text-align: center;
      }
    }

    img {
        width: 23.625rem;
        height: 16.25rem;
      }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    header {
      h1 {
        font-size: 2rem;
        line-height: 2.5rem;
      }

      p {
        font-size: 1rem;
      }
    }

    img {
      width: 26.625rem;
      height: 19.375rem;
    }
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const ItemsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  div {
    display: flex;
    align-items: center;

    span {
      margin-left: .75rem;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }

  @media only screen and (max-width: 767px) {
    div {
      span {
        font-size: .6rem;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    div {
      span {
        font-size: .8rem;
      }
    }
  }
`;

const ITEMS_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  base: 'base-text',
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

export const ProductsContainer = styled.section`
  margin-top: 2rem;
  margin-bottom: 9.8125rem;

  h2 {
    font-family: 'baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  & > div{
    margin-top: 3.375rem;

    display: flex;
    align-items: center;
    gap: 2.5rem 2rem;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 767px) {
    h2 {
      text-align: center;
      font-size: 1.5rem;
    }

    & > div {
      flex-direction: column;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    h2 {
      font-size: 1.5rem;
      text-align: center;
    }

    & > div {
      justify-content: center;
    }
  }
`;
