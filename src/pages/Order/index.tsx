import * as S from './styles'
// import * as Icon from '@phosphor-icons/react'
import { data } from '../../database/data'
import { FormAdress } from './components/FormAdress'
import { Payment } from './components/Payment'

export function Order() {
  const itemsOrder = [data[0], data[1]]
  const totalCostItems = itemsOrder.reduce((acc, item) => acc + item.price, 0)
  const deliveryFee = 3.5
  const totalCost = totalCostItems + deliveryFee
  return (
    <S.FormCotainer>
      <S.AdditionalInformation>
        <h1>Complete seu pedido</h1>
        <FormAdress />
        <Payment />
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
