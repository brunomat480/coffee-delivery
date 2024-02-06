import { ReactNode, createContext, useState } from 'react';


export interface Product {
  id: number
  image: string;
  name: string;
  types: string[];
  description: string;
  price: number;
  quantity: number;
}

interface ProductContextType {
  productCart: (Product | null)[]
  handleAddProductCart: (coffee: Product) => void;
  handleProductQuantityControl: (quantity: number) => void;
  setControlProductCart: (products: (Product | null)[]) => void;
}

export const ProductContext = createContext({} as ProductContextType);

interface ProductsContextsProviderProps {
  children: ReactNode
}

export function ProductsContextsProvider({ children }: ProductsContextsProviderProps) {
  const [productCart, setProductCart] = useState<(Product | null)[]>([]);
  const [quantityProductAdd, setQuantityProductAdd] = useState(1);

  function handleAddProductCart(coffee: Product) {
    const productAlreadyAdded = productCart.some((product) => product?.id === coffee.id);
    if (!productAlreadyAdded) {
      setProductCart((state) => [...state, { ...coffee, quantity: quantityProductAdd }]);
    } else {
      setProductCart((state) => state.map((product) => (
        product?.id === coffee.id ? { ...product, quantity: product.quantity + quantityProductAdd } : product
      )));
    }

    setQuantityProductAdd(1);
  }

  function handleProductQuantityControl(quantity: number) {
    setQuantityProductAdd((state) => state <= 0 ? 1 : quantity);
  }

  function setControlProductCart(products: (Product | null)[]) {
    setProductCart(products);
  }

  return (
    <ProductContext.Provider value={{
      productCart,
      handleAddProductCart,
      handleProductQuantityControl,
      setControlProductCart,
    }}
    >
      {children}
    </ProductContext.Provider>
  );
}
