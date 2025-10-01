import bannerImg from '../../assets/images/Imagem-exercicio.webp'
import Button from '../Button'
import Tag from '../Tag/Index'
import {
  Imagem,
  Titulo,
  Precos,
  ContainerBanner,
  ContainerInfos,
  ContainerTitle
} from './styles'

const Banner = () => (
  <>
    <Imagem banner={bannerImg} className="container">
      <ContainerBanner>
        <Tag size="big">Destaque do dia</Tag>
        <ContainerInfos>
          <ContainerTitle>
            <Titulo>Marvel Spider-Man: Miles Morales PS4 e PS5</Titulo>
            <Precos>
              De <span>R$ 250,00</span> <br />
              Por <span>R$ 100,00</span>
            </Precos>
          </ContainerTitle>
          <Button
            variant="primary"
            type="link"
            title="Clique aqui para aproveitar"
            to="/produto"
          >
            Clique aqui para aproveitar
          </Button>
        </ContainerInfos>
      </ContainerBanner>
    </Imagem>
  </>
)

export default Banner
