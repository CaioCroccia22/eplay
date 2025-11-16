import { format } from 'path'
import { Game } from '../../pages/Home'
import Tag from '../Tag/Index'
import { Card, Titulo, Descricao, Infos, ContainerDescription } from './styles'

export type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  background: 'gray' | 'black'
  id: number
}

const Produto = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  background,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    } else {
      return descricao
    }
  }

  return (
    <Card to={`/products/${id}`}>
      <img src={image} alt={title}></img>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <ContainerDescription>
        <Titulo>{title}</Titulo>
        <Tag>{category}</Tag>
        <Tag>{system}</Tag>
        <Descricao>{getDescricao(description)}</Descricao>
      </ContainerDescription>
    </Card>
  )
}

export default Produto
