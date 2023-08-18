import * as Icon from '@phosphor-icons/react'
import * as S from './styles'
import coffeeDeliveryImg from '../../../../assets/CoffeeDelivery.svg'

export function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderLeft>
        <S.TitleContainer>
          <h1>Encontro o café perfeito para qualquer hora do dia</h1>
        </S.TitleContainer>
        <S.SubtitleContianer>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </S.SubtitleContianer>
        <S.Items>
          <S.Item>
            <S.CartContainer>
              <Icon.ShoppingCart size={16} />
            </S.CartContainer>
            <label>Compra simples e segura</label>
          </S.Item>
          <S.Item>
            <S.BoxContainer>
              <Icon.Package size={16} />
            </S.BoxContainer>
            <label>Embalagem mantém o café intacto</label>
          </S.Item>
          <S.Item>
            <S.ClockContainer>
              <Icon.Timer size={16} />
            </S.ClockContainer>
            <label>Entrega rápida e rastreada</label>
          </S.Item>
          <S.Item>
            <S.CoffeeContainer>
              <Icon.Coffee size={16} />
            </S.CoffeeContainer>
            <label>O café chega fresquinho até você</label>
          </S.Item>
        </S.Items>
      </S.HeaderLeft>
      <S.HeaderRight>
        <img
          src={coffeeDeliveryImg}
          alt="imagem do coffee delivery com uma caneca com vários grãos de café"
        />
      </S.HeaderRight>
    </S.HeaderWrapper>
  )
}
