import { useCart } from '../../store/hooks/useCart'
import { parseToBrl } from '../../utils'
import Button from '../Button'

import Tag from '../Tag/Index'

import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const { AddProduct, ToggleCart } = useCart()
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount ? (
              <span>{parseToBrl(game.prices.old)}</span>
            ) : (
              <span></span>
            )}
            Por
            {game.prices.current && <> {parseToBrl(game.prices.current)} </>}
          </p>
          <Button
            onClick={() => {
              AddProduct(game)
              ToggleCart()
            }}
            variant="primary"
            type="button"
            title="Adicionar ao carrinho"
          >
            Adicionar o botão ao carrinho
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
