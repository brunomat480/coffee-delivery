import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { HeaderContainer, Item, ItemsContainer, ItemsGroup, ProductsContainer } from './styles';
import { useTheme } from 'styled-components';
import { ProductCard } from '../../components/ProductCard';
import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

import coffee from '../../assets/coffee.svg';
import { WarningNotifications } from '../../components/WarningNotifications';

const cafes = [
  {
    id: 1,
    image: '/cafes/traditional-express.svg',
    name: 'Expresso Tradicional',
    types: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    quantity: 1,
  },
  {
    id: 2,
    image: 'cafes/american-express.svg',
    name: 'Expresso Americano',
    types: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    quantity: 1,
  },
  {
    id: 3,
    image: 'cafes/creamy-espresso.svg',
    name: 'Expresso Cremoso',
    types: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    quantity: 1,
  },
  {
    id: 4,
    image: 'cafes/iced-espresso.svg',
    name: 'Expresso Gelado',
    types: ['tracional', 'com leite'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    quantity: 1,
  },
  {
    id: 5,
    image: 'cafes/coffee-with-milk.svg',
    name: 'Café com Leite',
    types: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    quantity: 1,
  },
  {
    id: 6,
    image: 'cafes/latte.svg',
    name: 'Latter',
    types: ['tradicional', 'com leite'],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    quantity: 1,
  },
  {
    id: 7,
    image: 'cafes/cappuccino.svg',
    name: 'Capuccino',
    types: ['tradicional', 'com leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    quantity: 1,
  },
  {
    id: 8,
    image: 'cafes/macchiato.svg',
    name: 'Macchiato',
    types: ['tradicional', 'com leite'],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    quantity: 1,
  },
  {
    id: 9,
    image: 'cafes/mocaccino.svg',
    name: 'Mocaccino',
    types: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    quantity: 1,
  },
  {
    id: 10,
    image: 'cafes/hot-chocolate.svg',
    name: 'Chocolate Quente',
    types: ['tradicional', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    quantity: 1,
  },
  {
    id: 11,
    image: 'cafes/cuban.svg',
    name: 'Cubano',
    types: ['tradicional', 'alicoólico', 'cubano'],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    quantity: 1,
  },
  {
    id: 12,
    image: 'cafes/hawaiian.svg',
    name: 'Havaiano',
    types: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    quantity: 1,
  },
  {
    id: 13,
    image: 'cafes/arabic.svg',
    name: 'Árabe',
    types: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    quantity: 1,
  },
  {
    id: 14,
    image: 'cafes/irish.svg',
    name: 'Irlandês',
    types: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    quantity: 1,
  }
];

export function Home() {
  const { colors } = useTheme();

  function notify(nameProduct: string) {
    toast.success(`${nameProduct} foi adicionado ao carrinho!`, {
      position: 'bottom-right'
    });
  }

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

        <div>
          {cafes.map((coffee) => (
            <ProductCard
              key={coffee.id}
              product={coffee}
              notify={notify}
            />
          ))}
        </div>
      </ProductsContainer>
      <WarningNotifications />
    </>
  );
}
