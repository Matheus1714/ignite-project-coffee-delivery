import * as S from './styles'
import * as Icon from '@phosphor-icons/react'
import { data } from '../../database/data'

export function Order() {
  const itemsOrder = [data[0], data[1]]
  const totalCostItems = itemsOrder.reduce((acc, item) => acc + item.price, 0)
  const deliveryFee = 3.5
  const totalCost = totalCostItems + deliveryFee
  return (
    <S.FormCotainer>
      <S.AdditionalInformation>
        <h1>Complete seu pedido</h1>
        <S.PaymentMethod>
          <header>
            <Icon.MapPinLine size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
        </S.PaymentMethod>
        <S.AdressInformation>
          <header>
            <Icon.CurrencyDollar size={22} />
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
        </S.AdressInformation>
      </S.AdditionalInformation>
      <S.CardOrder>
        <h1>Cafés selecionados</h1>
        <S.ListOrder>
          {itemsOrder.map((order) => {
            return <p key={order.id}>{order.name}</p>
          })}
        </S.ListOrder>
        <S.CostContainer>
          <p>Total de itens</p>
          <p>{`R$ ${totalCostItems.toFixed(2)}`}</p>
        </S.CostContainer>
        <S.CostContainer>
          <p>Enrega</p>
          <p>{`R$ ${deliveryFee.toFixed(2)}`}</p>
        </S.CostContainer>
        <S.CostContainer>
          <p>Total</p>
          <p>{`R$ ${totalCost.toFixed(2)}`}</p>
        </S.CostContainer>
        <button type="submit">Confirmar Pedido</button>
      </S.CardOrder>
    </S.FormCotainer>
  )
}
