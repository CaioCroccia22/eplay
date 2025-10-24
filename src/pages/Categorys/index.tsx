import ProductsList from '../../components/ProductsList'
import { Game } from '../../pages/Home'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import { useEffect, useState } from 'react'

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

const Categorys = () => {
  const [acao, setAcoes] = useState<Game[]>([])
  const [esportes, setEsportes] = useState<Game[]>([])
  const [luta, setLuta] = useState<Game[]>([])
  const [rpg, setRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/acao')
      .then((response) => response.json())
      .then((response) => setAcoes(response))
  }, [])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/esportes')
      .then((response) => response.json())
      .then((response) => setEsportes(response))
  })

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/luta')
      .then((response) => response.json())
      .then((response) => setLuta(response))
  })

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/rpg')
      .then((response) => response.json())
      .then((response) => setRpg(response))
  })

  return (
    <>
      <ProductsList games={rpg} title="RPG" background="gray" />
      <ProductsList games={acao} title="Acao" background="black" />
      <ProductsList games={luta} title="Luta" background="gray" />
      <ProductsList games={esportes} title="esportes" background="black" />
    </>
  )
}

export default Categorys
