class Game {
  id: number
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string
  ) {
    this.id = id
    this.description = description
    this.category = category
    this.image = image
    this.infos = infos
    this.title = title
    this.system = system
  }
}

export default Game
