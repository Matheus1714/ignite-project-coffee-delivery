import * as S from './styles'
import { CardItem } from '../CardItem'
import { data } from '../../../../database/data'

export function ListItems() {
  return (
    <S.ListItemsContianer>
      <S.TitleList>
        <h1>Nossos cafés</h1>
      </S.TitleList>
      <S.Items className="items">
        {data.map((coffee) => (
          <CardItem key={coffee.id} item={coffee} />
        ))}
      </S.Items>
    </S.ListItemsContianer>
  )
}
