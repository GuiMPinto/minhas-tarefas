import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}
const FiltroCard = ({ ativo, contador, legenda }: Props) => (
  <S.CARD ativo={ativo}>
    <S.CONTADOR>{contador}</S.CONTADOR>
    <S.LABEL>{legenda}</S.LABEL>
  </S.CARD>
)

export default FiltroCard
