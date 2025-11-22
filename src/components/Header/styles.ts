import styled from 'styled-components'
import { breakpoint, cores } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

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
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoint.tablet}) {
    max-width: 100%;
    flex: 1;
    justify-content: space-between;

    ${Links} {
      visibility: hidden;
      opacity: 0;
    }
  }
`

export const NavMobile = styled.nav`
  visibility: hidden;
  opacity: 0;

  &.is-open {
    display: block;
    visibility: visible;
    opacity: 1;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
  display: flex;
  @media (max-width: ${breakpoint.tablet}) {
    margin-right: 0px;
  }
`

export const CartButton = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoint.tablet}) {
    background-color: red;
    span {
      visibility: hidden;
      opacity: 0;
    }
  }
`
export const Hamburguer = styled.div`
  width: 32px;
  margin-right: 10px;
  cursor: pointer;
  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${cores.branca};
    margin-bottom: 4px;
  }

  @media (max-width: ${breakpoint.tablet}) {
    visibility: hidden;
    opacity: 0;
  }
`
