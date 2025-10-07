import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Props } from '.'
import { Link } from 'react-router'

export const Card = styled(Link)`
  background-color: ${cores.cinza};
  border-radius: 8px;
  position: relative;
  width: 222px;
  overflow: hidden;
  text-decoration: none;
  color: ${cores.branca};
  display: block;

  img {
    height: 250px;
    width: 222px;
    object-fit: cover;
    display: block;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const ContainerDescription = styled.div`
  margin-left: 15px;
`

export const Infos = styled.div`
  position: absolute;
  align-self: center;
  justify-self: center;
  top: 0px;

  right: 0px;
  z-index: 10;
`
