import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 245, 00'],
    image: resident
  },
  {
    id: 2,
    category: 'Aventura',
    description: 'Star Wars',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 290, 00'],
    image: starWars
  },
  {
    id: 3,
    category: 'Aventura',
    description: 'Zelda',
    title: 'Zelda',
    system: 'Windows',
    infos: ['10%', 'R$ 250, 00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Diablo',
    title: 'Diablo',
    system: 'Windows',
    infos: ['10%', 'R$ 250, 00'],
    image: diablo
  }
]

const emBreve: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 245, 00'],
    image: resident
  },
  {
    id: 2,
    category: 'Aventura',
    description: 'Star Wars',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 290, 00'],
    image: starWars
  },
  {
    id: 3,
    category: 'Aventura',
    description: 'Zelda',
    title: 'Zelda',
    system: 'Windows',
    infos: ['10%', 'R$ 250, 00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Diablo',
    title: 'Diablo',
    system: 'Windows',
    infos: ['10%', 'R$ 250, 00'],
    image: diablo
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promocoes" background="gray" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
