import styled from 'styled-components'

export type Props = {
  banner: string
}

export const Imagem = styled.div<Props>`
  width: 100%;
  height: 560px;
  display: block;
  background-image: url(${(props) => props.banner});
  background-repeat: no-repeat;
  //background-attachment: fixed;
  background-position: center;
  background-size: cover;
`
