import {
  HeaderContainer,
  Logo,
  LocationBox,
  HeaderRight,
  CartBox,
} from './styles'
import logoCoffeDelivery from '../../assets/Logo.svg'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoCoffeDelivery} alt="logo do coffee delivery" />
      <HeaderRight>
        <LocationBox>
          <MapPin size={22} />
          <p>Porto Alegre, RS</p>
        </LocationBox>
        <CartBox>
          <ShoppingCart size={22} />
        </CartBox>
      </HeaderRight>
    </HeaderContainer>
  )
}
