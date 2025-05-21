import Tarefa from '../../components/Tarefa'
import { useSelector } from 'react-redux'
import { Container } from './styles'
// import * as enums from '../../utils/enums/Tarefas'
import { RootReducer } from '../../store'

// const tarefas = [
//   {
//     titulo: 'Estudar Type Script',
//     descricao: 'Ver aula 1',
//     prioridade: enums.Prioridade.URGENTE,
//     status: enums.Status.PENDENTE
//   },
//   {
//     titulo: 'Estudar Redux',
//     descricao: 'Ver aula 2',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.CONCLUIDA
//   },
//   {
//     titulo: 'Estudar Python',
//     descricao: 'Ver aula 3',
//     prioridade: enums.Prioridade.NORMAL,
//     status: enums.Status.PENDENTE
//   },
//   {
//     titulo: 'Estudar java Script',
//     descricao: 'Ver aula 4',
//     prioridade: enums.Prioridade.URGENTE,
//     status: enums.Status.CONCLUIDA
//   }
// ]

// const ListaDeTarefas = () => (
//   <Container>
//     <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
//     <ul>
//       {tarefas.map((t) => (
//         <li key={t.titulo}>
//           <Tarefa
//             descricao={t.descricao}
//             titulo={t.titulo}
//             status={t.status}
//             prioridade={t.prioridade}
//           />
//         </li>
//       ))}
//     </ul>
//   </Container>
// )

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot; categoria &quot; e &quot; termo &quot;
      </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
