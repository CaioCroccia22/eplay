declare interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

// Aqui não coloquei classe pois era apenas para armazenar a estrutura da response
declare type Game = {
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
