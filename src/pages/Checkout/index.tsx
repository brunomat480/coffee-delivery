import { MapPinLine } from '@phosphor-icons/react';
import { CheckoutContainer, Form, FormContainer, FormGroup } from './styles';
import { useTheme } from 'styled-components';

export function Checkout() {
  const { colors } = useTheme();

  return (
    <CheckoutContainer>
      <h2>Complete seu pedido</h2>

      <FormGroup>
        <FormContainer>
          <header>
            <MapPinLine color={colors['yellow-dark']} size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <Form>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="text" placeholder="Número" />
              <div className="input">
                <input type="text" placeholder="Complemento" />
                <small>opcional</small>
              </div>
            </div>
            <div className="location">
              <div>
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
              </div>
              <input type="text" placeholder="UF" />
            </div>
          </Form>
        </FormContainer>
      </FormGroup>
    </CheckoutContainer>
  );
}
