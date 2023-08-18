import { Item } from '../../../../database/data'

interface CardItemProps {
  item: Item
}

export function CardItem({ item }: CardItemProps) {
  console.log(item)
  return <h1>Item</h1>
}
