import styled from 'styled-components'
import { breakpoint, cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoint.tablet}) {
    visibility: hidden;
    opacity: 0;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
  display: flex;
`

export const CartButton = styled.a`
  cursor: pointer;
  display: flex;
  img {
    margin-left: 16px;
  }
`
