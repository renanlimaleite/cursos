import checkIconUrl from '@/resources/images/check.svg';
import trashIconUrl from '@/resources/images/trash.svg';
import uncheckIconUrl from '@/resources/images/uncheck.svg';
import S from './todo.module.css';

type TodosProps = {
  handleDelete: () => void;
  handleUpdate: () => void;
  title: string;
  checked: boolean;
};

export function Todo({
  title,
  handleDelete,
  handleUpdate,
  checked = false,
}: TodosProps) {
  return (
    <div className={S.todos}>
      {checked ? (
        <img src={checkIconUrl} onClick={handleUpdate} />
      ) : (
        <img src={uncheckIconUrl} onClick={handleUpdate} />
      )}
      <p className={checked ? S.checked : ''}>{title}</p>
      <button onClick={handleDelete}>
        <img src={trashIconUrl} alt="Trash icon" />
      </button>
    </div>
  );
}
