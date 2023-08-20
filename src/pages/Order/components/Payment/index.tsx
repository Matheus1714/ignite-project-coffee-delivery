import * as S from './styles'
import * as Icon from '@phosphor-icons/react'

export function Payment() {
  return (
    <S.PaymentMethod>
      <S.HeaderPayment>
        <Icon.CurrencyDollar size={22} />
        <div>
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </S.HeaderPayment>
      <S.PaymentContainer>
        <S.ButtonPayment>
          <Icon.CreditCard size={16} />
          Cratão de crédito
        </S.ButtonPayment>
        <S.ButtonPayment>
          <Icon.Bank size={16} />
          Cratão de débito
        </S.ButtonPayment>
        <S.ButtonPayment>
          <Icon.Money size={16} />
          Dinheiro
        </S.ButtonPayment>
      </S.PaymentContainer>
    </S.PaymentMethod>
  )
}
