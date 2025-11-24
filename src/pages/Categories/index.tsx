import Loader from '../../components/Loader/Index'
import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportGamesQuery
} from '../../services/Api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } = useGetFightGameQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGameQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGameQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()

  return (
    <>
      {actionGames &&
      fightGames &&
      rpgGames &&
      simulationGames &&
      sportsGames ? (
        <>
          <ProductsList
            games={rpgGames}
            title="RPG"
            background="gray"
            id="rpg"
            isLoading={isLoadingRpg}
          />
          <ProductsList
            games={actionGames}
            title="Acao"
            background="black"
            id="action"
            isLoading={isLoadingAction}
          />
          <ProductsList
            games={fightGames}
            title="Luta"
            background="gray"
            id="fight"
            isLoading={isLoadingFight}
          />
          <ProductsList
            games={sportsGames}
            title="esportes"
            background="black"
            id="sports"
            isLoading={isLoadingSports}
          />
          <ProductsList
            games={simulationGames}
            title="simulacao"
            background="gray"
            id="simulation"
            isLoading={isLoadingSimulation}
          />
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}
export default Categories
