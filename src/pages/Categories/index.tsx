import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import { useEffect, useState } from 'react'
import {
  useGetActionGamesQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportGamesQuery
} from '../../services/Api'

// const promocoes: Game[] = [
//   {
//     id: 1,
//     category: 'Ação',
//     description: 'Resident Evil',
//     title: 'Resident Evil 4',
//     system: 'Windows',
//     infos: ['10%', 'R$ 245, 00'],
//     image: resident
//   },
//   {
//     id: 2,
//     category: 'Aventura',
//     description: 'Star Wars',
//     title: 'Star Wars',
//     system: 'Windows',
//     infos: ['10%', 'R$ 290, 00'],
//     image: starWars
//   },
//   {
//     id: 3,
//     category: 'Aventura',
//     description: 'Zelda',
//     title: 'Zelda',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250, 00'],
//     image: zelda
//   },
//   {
//     id: 4,
//     category: 'Ação',
//     description: 'Diablo',
//     title: 'Diablo',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250, 00'],
//     image: diablo
//   }
// ]

// const emBreve: Game[] = [
//   {
//     id: 1,
//     category: 'Ação',
//     description: 'Resident Evil',
//     title: 'Resident Evil 4',
//     system: 'Windows',
//     infos: ['10%', 'R$ 245, 00'],
//     image: resident
//   },
//   {
//     id: 2,
//     category: 'Aventura',
//     description: 'Star Wars',
//     title: 'Star Wars',
//     system: 'Windows',
//     infos: ['10%', 'R$ 290, 00'],
//     image: starWars
//   },
//   {
//     id: 3,
//     category: 'Aventura',
//     description: 'Zelda',
//     title: 'Zelda',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250, 00'],
//     image: zelda
//   },
//   {
//     id: 4,
//     category: 'Ação',
//     description: 'Diablo',
//     title: 'Diablo',
//     system: 'Windows',
//     infos: ['10%', 'R$ 250, 00'],
//     image: diablo
//   }
// ]

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGameQuery()
  const { data: rpgGames } = useGetRpgGameQuery()
  const { data: simulationGames } = useGetSimulationGameQuery()
  const { data: sportsGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportsGames) {
    return (
      <>
        <ProductsList games={rpgGames} title="RPG" background="gray" id="rpg" />
        <ProductsList
          games={actionGames}
          title="Acao"
          background="black"
          id="action"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={sportsGames}
          title="esportes"
          background="black"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          title="simulacao"
          background="gray"
          id="simulation"
        />
      </>
    )
  } else {
    return <h2>Carregando</h2>
  }
}

export default Categories
