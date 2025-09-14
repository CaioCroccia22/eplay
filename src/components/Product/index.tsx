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
}

const Produto = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  background
}: Props) => (
  <Card background={background}>
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
      <Descricao>{description}</Descricao>
    </ContainerDescription>
  </Card>
)

export default Produto
