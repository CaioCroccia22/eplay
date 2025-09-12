import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export type Props = {
  banner: string
}

export const Imagem = styled.div<Props>`
  width: 100%;
  height: 75vh;
  display: block;
  background-image: url(${(props) => props.banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-weight: bold;
`

export const ContainerBanner = styled.div`
  display: flex;
  max-height: 80%;
  flex-direction: column;
  max-width: 100%;
  gap: 10px;

  ${TagContainer} {
    max-width: 30%;
    margin-bottom: 270px;
  }
`

export const ContainerInfos = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
`
export const ContainerTitle = styled.div`
  width: 75%;
`

export const Titulo = styled.h2`
  font-size: 16px;
  max-width: 450px;
`
export const Precos = styled.span`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
