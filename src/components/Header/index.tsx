import { Link } from 'react-router-dom';

import { HeaderContainer } from './styles';

import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

import logo from '../../assets/logo.svg';

export function Header() {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />

      <div>
        <span>
          <MapPin color={theme.colors.purple} size={22} weight="fill" />
          Porto Alegre, RS
        </span>

        <Link to="/">
          <ShoppingCart color={theme.colors['yellow-dark']} size={22} weight="fill" />
        </Link>
      </div>
    </HeaderContainer>
  );
}
