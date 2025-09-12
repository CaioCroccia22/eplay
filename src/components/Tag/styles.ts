import { styled } from 'styled-components'
import { cores } from '../../styles'
import { Props } from './Index'

export const TagContainer = styled.div<Props>`
  border-radius 12px;
  background-color: ${cores.verde};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? ' 8px 16px' : '4px 6px')};
  display: inline-block;
`
