import * as S from './styles'
import { Item } from '../../../../database/data'
import { ShoppingCart } from '@phosphor-icons/react'

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
        <S.PriceText>
          <p>R$</p>
          <strong>{item.price}</strong>
        </S.PriceText>
        <div>
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <ShoppingCart size={22} />
        </div>
      </S.ItemControl>
    </S.CardItemWrapper>
  )
}
