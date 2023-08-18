import * as S from './styles'
import logoCoffeDelivery from '../../assets/Logo.svg'
import * as Icon from '@phosphor-icons/react'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.Logo src={logoCoffeDelivery} alt="logo do coffee delivery" />
      <S.HeaderRight>
        <S.LocationBox>
          <Icon.MapPin size={22} />
          <p>Porto Alegre, RS</p>
        </S.LocationBox>
        <S.CartBox>
          <Icon.ShoppingCart size={22} />
        </S.CartBox>
      </S.HeaderRight>
    </S.HeaderContainer>
  )
}
