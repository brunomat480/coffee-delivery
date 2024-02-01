import { ReactNode, createContext } from 'react';

interface ProductContextType {

}

const ProductContext = createContext({} as ProductContextType);

interface ProductsContextsProviderProps {
  children: ReactNode
}

export function ProductsContextsProvider({ children }: ProductsContextsProviderProps) {
  return (
    <ProductContext.Provider value={{}}>
      {children}
    </ProductContext.Provider>
  );
}
