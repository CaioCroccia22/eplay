import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

type PurchaseResponse = {
  orderId: string
}

// Cobre erro da API quando os itens não tem valor
const normalizarJogo = (game: Game): Game => ({
  ...game,
  prices: {
    ...game.prices,
    current: game.prices.current ?? 250
  }
})

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    // Builder aqui tipa a requisição http <Retorno, Enviado>
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque',
      transformResponse: (response: Game) => normalizarJogo(response)
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes',
      transformResponse: (response: Game[]) => response.map(normalizarJogo)
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve',
      transformResponse: (response: Game[]) => response.map(normalizarJogo)
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao',
      transformResponse: (response: Game[]) => response.map(normalizarJogo)
    }),
    getSportGames: builder.query<Game[], void>({
      query: () => 'esportes',
      transformResponse: (response: Game[]) => response.map(normalizarJogo)
    }),
    getSimulationGame: builder.query<Game[], void>({
      query: () => 'simulacao',
      transformResponse: (response: Game[]) => response.map(normalizarJogo)
    }),
    getFightGame: builder.query<Game[], void>({
      query: () => 'luta',
      transformResponse: (response: Game[]) => response.map(normalizarJogo)
    }),
    getRpgGame: builder.query<Game[], void>({
      query: () => 'rpg',
      transformResponse: (response: Game[]) => response.map(normalizarJogo)
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`,
      transformResponse: (response: Game) => normalizarJogo(response)
    }),
    purchease: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})
// gera um hook automatico dessas requisições
export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetFightGameQuery,
  useGetSimulationGameQuery,
  useGetRpgGameQuery,
  useGetGameQuery,
  usePurcheaseMutation
} = api
export default api
