import styled from 'styled-components'

import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const CARD = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90EF' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1E90EF' : '#5e5e5e')};
  border-radius: 8px;
`
export const CONTADOR = styled.span`
  font-weight: bold;
  font-size: 24px;
  displsy: block;
`
export const LABEL = styled.span`
  font-size: 14px;
`
