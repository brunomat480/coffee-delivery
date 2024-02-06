import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import { Item, PurchaseNotice, SuccessContainer } from './styles';
import { useTheme } from 'styled-components';

import deliveryman from '../../../../assets/deliveryman.svg';

interface PurchaseDataType {
  number: number;
  cep: string;
  road: string;
  neighborhood: string;
  city: string;
  fu: string;
  complement?: string | undefined;
  formPayment?: string | undefined;
}


interface SuccessProps {
  purchaseData: PurchaseDataType | null
}

export function Success({ purchaseData }: SuccessProps) {
  const { colors } = useTheme();

  return (
    <SuccessContainer>
      <div>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <PurchaseNotice>
          <div>
            <Item $itemColor="purple">
              <MapPin color={colors.background} size={16} weight='fill' />
            </Item>
            <span>Entrega em <strong>{purchaseData?.road}, {purchaseData?.number}</strong> <br /> {purchaseData?.neighborhood} - {purchaseData?.city}, {purchaseData?.fu}</span>
          </div>

          <div>
            <Item $itemColor="yellow">
              <Timer color={colors.background} size={16} weight='fill' />
            </Item>
            <span>Previsão de entrega<br /><strong>20 min - 30 min</strong></span>
          </div>

          <div>
            <Item $itemColor="yellowDark">
              <CurrencyDollar color={colors.background} size={16} />
            </Item>
            <span>Pagamento na entrega<br /><strong>{purchaseData?.formPayment}</strong></span>
          </div>

        </PurchaseNotice>
      </div>

      <img src={deliveryman} alt="" />

    </SuccessContainer>
  );
}
