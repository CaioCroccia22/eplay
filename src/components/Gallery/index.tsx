import Section from '../Section'

import zelda from '../../assets/images/zelda.png'
import zoom from '../../assets/images/mais-zoom.png'
import play from '../../assets/images/play.png'
import spiderman from '../../assets/images/Imagem-exercicio.webp'
import fechar from '../../assets/images/close 1.png'

import { Action, Item, Items, Modal, ModalContent } from './styles'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

export const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/watch?v=8nJxEEXNkFI'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMidiaCover = (Item: GalleryItem) => {
    if (Item.type === 'image') return Item.url
    else return defaultCover
  }

  const getMidiaIcon = (Item: GalleryItem) => {
    if (Item.type === 'image') return zoom
    else return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((midia, index) => (
            <Item key={index}>
              <img
                src={getMidiaCover(midia)}
                alt={`Midia ${index + 1} de Nome do ${name}`}
              />
              <Action>
                <img
                  src={getMidiaIcon(midia)}
                  alt="Clique aqui para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Icone de fechar" />
          </header>
          <img src={spiderman} alt="Icone de fechar" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
