import { Game } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const ProductsList = ({ title, background, games, id }: Props) => {
  // O retorno é um string da NumberFormat

  // Preencher a props tags do product
  // Estrutura da API não bate com a props
  // Tem a possibilidade de trocar para um [] de number mass alguma coisa iam quebrar
  const getGameTags = (game: Game) => {
    const tags = []

    // Já fica preentendido o true pelo React
    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }
  return (
    <Container id={id} background={background}>
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <li key={game.id}>
            <Product
              id={game.id}
              title={game.name}
              category={game.details.category}
              image={game.media.thumbnail}
              description={game.description}
              system={game.details.system}
              infos={getGameTags(game)}
              background={background}
            ></Product>
          </li>
        ))}
      </List>
    </Container>
  )
}

export default ProductsList
