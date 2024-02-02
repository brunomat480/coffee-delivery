import { HeaderContainer, Location } from './styles';

import { Link } from 'react-router-dom';

import { useTheme } from 'styled-components';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductsContext';

import { MapPin, ShoppingCart } from '@phosphor-icons/react';

import logo from '../../assets/logo.svg';


export function Header() {
  const theme = useTheme();
  const { productCart } = useContext(ProductContext);

  return (
    <HeaderContainer $productCart={productCart}>
      <img src={logo} alt="Logo" />

      <div>
        <Location>
          <MapPin
            color={theme.colors.purple}
            size={22}
            weight="fill"
          />
          Porto Alegre, RS
        </Location>

        <Link to="/">
          <ShoppingCart
            color={theme.colors['yellow-dark']}
            size={22}
            weight="fill"
          />
        </Link>
      </div>
    </HeaderContainer>
  );
}
