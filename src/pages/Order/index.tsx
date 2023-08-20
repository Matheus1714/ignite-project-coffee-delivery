import * as S from './styles'
// import * as Icon from '@phosphor-icons/react'
import { data } from '../../database/data'
import { FormAdress } from './components/FormAdress'
import { Payment } from './components/Payment'
import { ItemQuantity } from '../Home/components/ItemQuantity'

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
        <S.CardOrderContainer>
          <S.ListOrder>
            {itemsOrder.map((order) => {
              return (
                <S.OrderItem key={order.id}>
                  <div>
                    <img
                      src={order.image}
                      alt={`Foto do ${order.name} em um item da lista de pedidos`}
                    />
                    <div>
                      <div>
                        <p>{order.name}</p>
                      </div>
                      <div>
                        <ItemQuantity />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>{`R$ ${order.price.toFixed(2)}`}</p>
                  </div>
                </S.OrderItem>
              )
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
          <S.ButtonSubmitOrder type="submit">
            Confirmar Pedido
          </S.ButtonSubmitOrder>
        </S.CardOrderContainer>
      </S.CardOrder>
    </S.FormCotainer>
  )
}
