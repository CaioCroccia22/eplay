import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/Api'

const Home = () => {
  const { data: onSale, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soon, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        id="on-sale"
        games={onSale}
        title="Promocoes"
        background="gray"
        isLoading={isLoadingSale}
      />
      <ProductsList
        id="coming-soon"
        games={soon}
        title="Em Breve"
        background="black"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
