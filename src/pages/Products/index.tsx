import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import Gallery from '../../components/Gallery'
import { useGetGameQuery } from '../../services/Api'
import Loader from '../../components/Loader/Index'

type GameParams = {
  productId: string
}

const Products = () => {
  const { productId } = useParams() as GameParams
  const { data: game } = useGetGameQuery(productId)

  return (
    <>
      {game ? (
        <>
          <Hero game={game} />
          <Section title="Sobre o Jogo" background="black">
            <p>{game.description}</p>
          </Section>
          <Section title="Mais detalhes" background="gray">
            <p>
              <b>Plataforma: </b>
              {game.details.system}
              <br />
              <b>Desenvolvedor:</b> {game.details.developer} <br />
              <b>Editora:</b> {game.details.publishe} <br />
              <b>Idiomas: </b> O jogo oferece suporte a diversos idiomas:
              {game.details.languages.join(', ')}
            </p>
          </Section>
          <Gallery
            name={game.name}
            defaultCover={game.media.cover}
            items={game.media.gallery}
          ></Gallery>
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Products
