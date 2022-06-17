import { NoList } from '@/ui/NoList';
import S from './list-todos.module.css';

export function ListTodos() {
  return (
    <>
      <header className={S.header}>
        <p className={S.tasks}>
          Tarefas criadas <span>5</span>
        </p>
        <p className={S.finished}>
          Concluídas <span>2 de 5</span>
        </p>
      </header>
      <section className={S.listOfTasks}>
        <NoList />
      </section>
    </>
  );
}
