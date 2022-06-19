import checkIconUrl from '@/resources/images/check.svg';
import trashIconUrl from '@/resources/images/trash.svg';
import uncheckIconUrl from '@/resources/images/uncheck.svg';
import S from './todo.module.css';

type TodosProps = {
  handleDelete: () => void;
  title: string;
  checked: boolean;
};

export function Todo({ title, handleDelete, checked = false }: TodosProps) {
  return (
    <div className={S.todos}>
      {checked ? <img src={checkIconUrl} /> : <img src={uncheckIconUrl} />}
      <p>{title}</p>
      <button onClick={handleDelete}>
        <img src={trashIconUrl} alt="Trash icon" />
      </button>
    </div>
  );
}
