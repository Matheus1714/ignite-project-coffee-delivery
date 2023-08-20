import * as S from './styles'
import { Item } from '../../../../database/data'
import { ShoppingCart } from '@phosphor-icons/react'
import * as Icon from '@phosphor-icons/react'

interface CardItemProps {
  item: Item
}

export function CardItem({ item }: CardItemProps) {
  return (
    <S.CardItemWrapper>
      <S.ProductImage src={item.image} alt={`Imaggem do ${item.name}`} />
      <S.LabelCharacteristicCotainer>
        {item.characteristics.map((characteristic) => {
          return (
            <S.LabelCharacteristic key={characteristic}>
              {characteristic}
            </S.LabelCharacteristic>
          )
        })}
      </S.LabelCharacteristicCotainer>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <S.ItemControl>
        <S.ItemCost>
          <span>R$</span>
          <span>{item.price.toFixed(2)}</span>
        </S.ItemCost>
        <S.ItemQuantity>
          <button>
            <Icon.Minus size={14} />
          </button>
          <span>1</span>
          <button>
            <Icon.Plus size={14} />
          </button>
        </S.ItemQuantity>
        <S.CartButton>
          <ShoppingCart size={22} />
        </S.CartButton>
      </S.ItemControl>
    </S.CardItemWrapper>
  )
}
