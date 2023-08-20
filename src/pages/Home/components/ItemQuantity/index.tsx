import * as S from './styles'
import * as Icon from '@phosphor-icons/react'

export function ItemQuantity() {
  return (
    <S.ItemQuantity>
      <button>
        <Icon.Minus size={14} />
      </button>
      <span>1</span>
      <button>
        <Icon.Plus size={14} />
      </button>
    </S.ItemQuantity>
  )
}
