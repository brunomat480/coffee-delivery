import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { HeaderContainer, Item, ItemsContainer, ItemsGroup, ProductsContainer } from './styles';
import { useTheme } from 'styled-components';

import coffee from '../../assets/coffee.svg';
import { ProductCard } from '../../components/ProductCard';

const cafes = [
  {
    image: '../../assets/cafes/traditional-express.svg',
    name: 'Expresso Tradicional',
    type: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
  },
  {
    image: '../../assets/cafes/american-express.svg',
    name: 'Expresso Americano',
    type: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
  },
  {
    image: '../../assets/cafes/creamy-espresso.svg',
    name: 'Expresso Cremoso',
    type: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
  },
  {
    image: '../../assets/cafes/iced-espresso.svg',
    name: 'Expresso Gelado',
    type: ['tracional', 'com leite'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
  },
  {
    image: '../../assets/cafes/coffee-with-milk.svg',
    name: 'Café com Leite',
    type: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
  },
  {
    image: '../../assets/cafes/latter.svg',
    name: 'Latter',
    type: ['tradicional', 'com leite'],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
  },
  {
    image: '../../assets/cafes/cappuccino.svg',
    name: 'Latter',
    type: ['tradicional', 'com leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
  },
  {
    image: '../../assets/cafes/macchiato.svg',
    name: 'Macchiato',
    type: ['tradicional', 'com leite'],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
  },
  {
    image: '../../assets/cafes/mocaccino.svg',
    name: 'Mocaccino',
    type: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
  },
  {
    image: '../../assets/cafes/hot-chocolate.svg',
    name: 'Chocolate Quente',
    type: ['tradicional', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
  },
  {
    image: '../../assets/cafes/cuban.svg',
    name: 'Cubano',
    type: ['tradicional', 'alicoólico', 'cubano'],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
  },
  {
    image: '../../assets/cafes/hawaiian.svg',
    name: 'Havaiano',
    type: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
  },
  {
    image: '../../assets/cafes/arabic.svg',
    name: 'Árabe',
    type: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
  },

  {
    image: '../../assets/cafes/irish.svg',
    name: 'Irlandês',
    type: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
  }
];

export function Home() {
  const { colors } = useTheme();

  return (
    <>
      <HeaderContainer>
        <header>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </div>

          <ItemsContainer>
            <ItemsGroup>
              <div>
                <Item $itemColor='yellowDark'>
                  <ShoppingCart color={colors.background} size={16} weight='fill' />
                </Item>
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Item $itemColor='yellow'>
                  <Timer color={colors.background} size={16} weight='fill' />
                </Item>
                <span>Entrega rápida e rastreada</span>
              </div>
            </ItemsGroup>

            <ItemsGroup>
              <div>
                <Item $itemColor='base'>
                  <Package color={colors.background} size={16} weight='fill' />
                </Item>
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Item $itemColor='purple'>
                  <Coffee color={colors.background} size={16} weight='fill' />
                </Item>
                <span>O café chega fresquinho até você</span>
              </div>
            </ItemsGroup>
          </ItemsContainer>
        </header>

        <img src={coffee} alt="Imagem de um café" />
      </HeaderContainer >

      <ProductsContainer>
        <h2>Nossos cafés</h2>
      </ProductsContainer>
    </>

  );
}
