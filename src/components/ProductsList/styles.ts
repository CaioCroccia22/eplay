import styled from 'styled-components'
import { Props } from '.'
import { breakpoint, colors } from '../../styles'

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 32px 40px 32px 40px;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin: 20px 50px 0px 50px;

  @media (max-width: ${breakpoint.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
`
