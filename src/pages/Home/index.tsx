import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import { useEffect, useState } from 'react'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/Api'

// type Game = []
// Conteudo estático para teste
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
