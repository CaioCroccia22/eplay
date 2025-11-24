import Button from '../Button'
import Tag from '../Tag/Index'

import * as S from './styles'

import { useGetFeaturedGameQuery } from '../../services/Api'
import { parseToBrl } from '../../utils'
import Loader from '../Loader/Index'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  return (
    <>
      {game && (
        <S.Image style={{ background: `url(${game?.media.cover})` }}>
          <S.ContainerBanner>
            <Tag size="big">Destaque do dia</Tag>
            <S.ContainerInfos>
              <S.ContainerTitle>
                <S.Title>{game?.name}</S.Title>
                <S.Prices>
                  De <span>{parseToBrl(game.prices.old)}</span> <br />
                  Por <span>{parseToBrl(game.prices.current)}</span>
                </S.Prices>
              </S.ContainerTitle>
              <Button
                variant="primary"
                type="link"
                title="Clique aqui para aproveitar"
                to={`products/${game.id}`}
              >
                Clique aqui para aproveitar
              </Button>
            </S.ContainerInfos>
          </S.ContainerBanner>
        </S.Image>
      )}
    </>
  )
}

export default Banner
