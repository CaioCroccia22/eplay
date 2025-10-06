import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 40px 32px 40px;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preta : cores.cinza};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin: 20px 50px 0px 50px;
`

export const Title = styled.h2`
  font-size: 18px;
`
