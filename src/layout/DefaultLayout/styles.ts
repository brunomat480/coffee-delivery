import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 1120px;
  margin: auto;

  @media only screen and (max-width: 767px)  {
    padding-inline: 2rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding-inline: 2rem;
  }
`;
