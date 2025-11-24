import Section from '../Section'

import zoom from '../../assets/images/mais-zoom.png'
import play from '../../assets/images/play.png'
import fechar from '../../assets/images/close 1.png'

import { Action, Item, Items, Modal, ModalContent } from './styles'
import { useState } from 'react'
import { GalleryItem } from '../../pages/Home'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  // Quando for imagem vai mostrar a capa
  const getMidiaCover = (Item: GalleryItem) => {
    if (Item.type === 'image') return Item.url
    else return defaultCover
  }

  const getMidiaIcon = (Item: GalleryItem) => {
    if (Item.type === 'image') return zoom
    else return play
  }

  const closeModal = () => {
    setModal({ isVisible: false, type: 'image', url: '' })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((midia, index) => (
            <Item
              key={index}
              onClick={() => {
                setModal({ isVisible: true, type: midia.type, url: midia.url })
              }}
            >
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
      <Modal className={modal.isVisible ? 'is-visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Icone de fechar"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="Icone de fechar" />
          ) : (
            <iframe src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
