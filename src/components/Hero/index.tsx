import banner from '../../assets/images/hero.jpg'
import Button from '../Button'
import Tag from '../Tag/Index'

import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${banner})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 190,00
        </p>
        <Button variant="primary" type="button" title="Adicionar ao carrinho">
          Adicionar o botão ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
