import banner from '../../assets/images/hero.jpg'
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
      </Infos>
    </div>
  </Banner>
)

export default Hero
