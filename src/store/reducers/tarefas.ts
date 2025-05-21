import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefas'
import * as enums from '../../utils/enums/Tarefas'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Java Script',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Rever aula 1',
      1
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'Rever aula 3',
      2
    ),
    new Tarefa(
      'Estudar Redux',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'Rever aula 4',
      3
    ),
    new Tarefa(
      'Estudar Type Script',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Rever aula 2',
      4
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
