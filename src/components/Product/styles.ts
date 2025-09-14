import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Props } from '.'

export const Card = styled.div<
  Omit<
    Props,
    'title' | 'image' | 'infos' | 'description' | 'system' | 'category'
  >
>`
  background-color: ${(props) =>
    props.background === 'black' ? cores.cinza : cores.preta};
  border-radius: 8px;
  position: relative;
  width: 222px;
  // padding: 20px;

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
  // right: 0px;
  margin-left: 43px;
  // max-width: 60%;
  z-index: 10;
  border-radius: 5px;
`
