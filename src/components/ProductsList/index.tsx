import Product from '../Product'
import { Container, List } from './styles'

type Props = {
  title?: string
  background?: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container>
    <h2>{title}</h2>
    <List>
      <Product
        category="Ação"
        description="teste"
        image="https://placehold.co/150x150/png"
        system="Windows"
        infos={['-10%', 'R$ 150']}
        title="Nome do Jogo"
      />
      <Product
        category="Ação"
        description="teste"
        image="https://placehold.co/150x150/png"
        system="Windows"
        infos={['-10%', 'R$ 150']}
        title="Nome do Jogo"
      />
      <Product
        category="Ação"
        description="teste"
        image="https://placehold.co/150x150/png"
        system="Windows"
        infos={['-10%', 'R$ 150']}
        title="Nome do Jogo"
      />
      <Product
        category="Ação"
        description="teste"
        image="https://placehold.co/150x150/png"
        system="Windows"
        infos={['-10%', 'R$ 150']}
        title="Nome do Jogo"
      />
    </List>
  </Container>
)

export default ProductsList
