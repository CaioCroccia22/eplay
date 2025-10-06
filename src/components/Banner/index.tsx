import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home/index'
import bannerImg from '../../assets/images/Imagem-exercicio.webp'
import Button from '../Button'
import Tag from '../Tag/Index'
import { formataPreco } from '../ProductsList'
import {
  Imagem,
  Titulo,
  Precos,
  ContainerBanner,
  ContainerInfos,
  ContainerTitle
} from './styles'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Imagem style={{ background: `url(${game?.media.cover})` }}>
        <ContainerBanner>
          <Tag size="big">Destaque do dia</Tag>
          <ContainerInfos>
            <ContainerTitle>
              <Titulo>{game?.name}</Titulo>
              <Precos>
                De <span>{formataPreco(game.prices.old)}</span> <br />
                Por <span>{formataPreco(game.prices.current)}</span>
              </Precos>
            </ContainerTitle>
            <Button
              variant="primary"
              type="link"
              title="Clique aqui para aproveitar"
              to="/products"
            >
              Clique aqui para aproveitar
            </Button>
          </ContainerInfos>
        </ContainerBanner>
      </Imagem>
    </>
  )
}

export default Banner
