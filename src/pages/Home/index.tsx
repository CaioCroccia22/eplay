import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/Api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

// Aqui não coloquei classe pois era apenas para armazenar a estrutura da response
export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount: number
    old: number
    current: number
  }
  details: {
    category: string
    system: string
    developer: string
    publishe: string[]
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSale } = useGetOnSaleQuery()
  const { data: soon } = useGetSoonQuery()

  if (onSale && soon) {
    return (
      <>
        <Banner />
        <ProductsList
          id="on-sale"
          games={onSale}
          title="Promocoes"
          background="gray"
        />
        <ProductsList
          id="coming-soon"
          games={soon}
          title="Em Breve"
          background="black"
        />
      </>
    )
  } else {
    return <h4>Carregando</h4>
  }
}

export default Home
