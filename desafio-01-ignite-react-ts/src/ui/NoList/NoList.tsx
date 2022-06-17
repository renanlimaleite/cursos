import clipBoardSrc from '@/resources/images/clipboard.svg';
import S from './no-list.module.css';

export function NoList() {
  return (
    <div className={S.noList}>
      <img src={clipBoardSrc} alt="Ìcone de uma lista de tarefa" />
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
