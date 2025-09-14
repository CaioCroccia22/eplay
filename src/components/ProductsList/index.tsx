import Game from '../../models/Game'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <h2>{title}</h2>
    <List>
      {games.map((game) => (
        <Product
          key={game.id}
          category={game.category}
          image={game.image}
          infos={game.infos}
          system={game.system}
          title={game.title}
          description={game.description}
          background={'gray'}
        ></Product>
      ))}
    </List>
  </Container>
)

export default ProductsList
