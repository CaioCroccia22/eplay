import banner from '../../assets/images/hero.jpg'
import { Game } from '../../pages/Home'
import Button from '../Button'
import { formataPreco } from '../ProductsList'
import Tag from '../Tag/Index'

import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && <span>{formataPreco(game.prices.old)}</span>}
          Por
          {game.prices.current && (
            <span>{formataPreco(game.prices.current)}</span>
          )}
        </p>
        {game.prices.current && (
          <Button variant="primary" type="button" title="Adicionar ao carrinho">
            Adicionar o botão ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
