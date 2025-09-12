import Tag from '../Tag/Index'
import { Card, Titulo, Descricao } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Produto = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title}></img>
    <div>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </div>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Produto
