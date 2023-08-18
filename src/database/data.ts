import ExpressoTradicional from '../assets/coffees/Expresso.svg'
import ExpressoAmericano from '../assets/coffees/Americano.svg'
import ExpressoCremoso from '../assets/coffees/Expresso Cremoso.svg'
import ExpressoGelado from '../assets/coffees/Cafe Gelado.svg'
import CafeComLeite from '../assets/coffees/Cafe com Leite.svg'
import Latte from '../assets/coffees/Latte.svg'
import Capuccino from '../assets/coffees/Capuccino.svg'
import Macchiato from '../assets/coffees/Macchiato.svg'
import Mochaccino from '../assets/coffees/Mochaccino.svg'
import ChocolateQuente from '../assets/coffees/Chocolate Quente.svg'
import Cubano from '../assets/coffees/Cubano.svg'
import Havaiano from '../assets/coffees/Havaiano.svg'
import Arabe from '../assets/coffees/Arabe.svg'
import Irlandes from '../assets/coffees/Irlandes.svg'
import { v4 as uuidv4 } from 'uuid'

export interface Item {
  id: string
  image: string
  characteristics: Array<string>
  name: string
  description: string
  price: number
}

export const data: Item[] = [
  {
    id: uuidv4(),
    image: ExpressoTradicional,
    description: 'O tradicional café feito com água quente e grãos moídos',
    name: 'Expresso Tradicional',
    characteristics: ['Tradicional'],
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: ExpressoAmericano,
    description: 'Expresso diluído, menos intenso que o tradicional',
    name: 'Expresso Americano',
    characteristics: ['Tradicional'],
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: ExpressoCremoso,
    description: 'Café expresso tradicional com espuma cremosa',
    name: 'Expresso Cremoso',
    characteristics: ['Tradicional'],
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: ExpressoGelado,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    name: 'Expresso Gelado',
    characteristics: ['Tradicional', 'Gelado'],
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: CafeComLeite,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    name: 'Café com Leite',
    characteristics: ['Tradicional', 'Com Leite'],
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: Latte,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    name: 'Latte',
    characteristics: ['Tradicional', 'Com Leite'],
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: Capuccino,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    name: 'Capuccino',
    characteristics: ['Tradicional', 'Com Leite'],
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: Macchiato,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    name: 'Macchiato',
    characteristics: ['Tradicional', 'Com Leite'],
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: Mochaccino,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    name: 'Mocaccino',
    characteristics: ['Tradicional', 'Com Leite'],
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: ChocolateQuente,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    name: 'Chocolate Quente',
    characteristics: ['Especial', 'Com Leite'],
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: Cubano,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    name: 'Cubano',
    characteristics: ['Especial', 'Alccólico', 'Gelado'],
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: Havaiano,
    description: 'Bebida adocicada preparada com café e leite de coco',
    name: 'Havaiano',
    characteristics: ['Especial'],
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: Arabe,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    name: 'Árabe',
    characteristics: ['Especial'],
    price: 9.9,
  },
  {
    id: uuidv4(),
    image: Irlandes,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    name: 'Irlandês',
    characteristics: ['Especial', 'Alcoólico'],
    price: 9.9,
  },
]
