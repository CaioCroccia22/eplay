import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import zelda from '../../assets/images/zelda.png'
import Gallery from '../../components/Gallery'
import ResidentEvil from '../../assets/images/resident.png'
import { useEffect, useState } from 'react'
import { Game } from '../Home'
import { useGetGameQuery } from '../../services/Api'

const Products = () => {
  const { productId } = useParams()
  const { data: game, isError, isLoading } = useGetGameQuery(productId!)
  console.log(productId)
  console.log(typeof productId)

  if (game === undefined) {
    return <h3>Carregando produto...</h3>
  }

  if (isError) {
    return <h3>Esta com erro....</h3>
  }

  return (
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
  )
}

export default Products
