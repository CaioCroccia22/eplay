import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportGamesQuery
} from '../../services/Api'

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
