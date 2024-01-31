import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { HomeContainer, Item, ItemsContainer, ItemsGroup } from './styles';
import { useTheme } from 'styled-components';

import coffee from '../../assets/coffee.svg';

export function Home() {
  const { colors } = useTheme();

  return (
    <HomeContainer>
      <header>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>


        <ItemsContainer>

          <ItemsGroup>
            <div>
              <Item itemColor='yellowDark'>
                <ShoppingCart color={colors.background} size={16} weight='fill' />
              </Item>
              <span>Compra simples e segura</span>
            </div>

            <div>
              <Item itemColor='yellow'>
                <Timer color={colors.background} size={16} weight='fill' />
              </Item>
              <span>Embalagem mantém o café intacto</span>
            </div>
          </ItemsGroup>

          <ItemsGroup>
            <div>
              <Item itemColor='base'>
                <Package color={colors.background} size={16} weight='fill' />
              </Item>
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <Item itemColor='purple'>
                <Coffee color={colors.background} size={16} weight='fill' />
              </Item>
              <span>O café chega fresquinho até você</span>
            </div>
          </ItemsGroup>
        </ItemsContainer>
      </header>

      <img src={coffee} alt="Imagem de um café" />
    </HomeContainer >
  );
}
