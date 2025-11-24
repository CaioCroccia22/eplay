import Tag from '../Tag/Index'
import { Card, Title, Description, Infos, ContainerDescription } from './styles'

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
  id
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    } else {
      return text
    }
  }

  return (
    <Card
      title={`Clique aqui para ver mais detalhes do jogo ${title}`}
      to={`/products/${id}`}
    >
      <img src={image} alt={title}></img>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <ContainerDescription>
        <Title>{title}</Title>
        <Tag>{category}</Tag>
        <Tag>{system}</Tag>
        <Description>{getDescription(description)}</Description>
      </ContainerDescription>
    </Card>
  )
}

export default Produto
