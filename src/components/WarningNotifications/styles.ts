import styled from 'styled-components';

import { ToastContainer } from 'react-toastify';

export const NotifyContainer = styled(ToastContainer)`
  .Toastify__toast {
    background: ${({ theme }) => theme.colors['base-subtitle']};
    color: ${({ theme }) => theme.colors.white};
  }

  .Toastify__close-button > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;
