import { AddNewTodo, OnChangeTodoForm } from '@/pages/Home/Home';
import S from './form.module.css';

type FormProps = {
  onNewTodo: AddNewTodo;
  onChangeNewTodo: OnChangeTodoForm;
  newTodo: string;
};

export function Form({ onNewTodo, onChangeNewTodo, newTodo }: FormProps) {
  return (
    <form className={S.form} onSubmit={onNewTodo}>
      <div className={S.searchBox}>
        <input
          onChange={onChangeNewTodo}
          value={newTodo}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit">Criar +</button>
      </div>
    </form>
  );
}
