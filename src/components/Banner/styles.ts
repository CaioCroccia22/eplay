import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { breakpoint } from '../../styles'

export const Image = styled.div`
  width: 100vw;
  height: 75vh;
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  font-weight: bold;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoint.tablet}) {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
`

export const ContainerBanner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100%;
  justify-content: space-between;
  height: 80%;
  z-index: 1;

  ${TagContainer} {
    width: 25%;
    border-radius: 8px;

    @media (max-width: ${breakpoint.tablet}) {
      width: 20%;
    }
  }
`

export const ContainerInfos = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
`
export const ContainerTitle = styled.div`
  width: 60%;
  margin-left: 150px;
`

export const Title = styled.h2`
  font-size: 16px;
  max-width: 450px;
`
export const Prices = styled.span`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
