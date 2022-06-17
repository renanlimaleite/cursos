import S from './form.module.css';

export function Form() {
  return (
    <form className={S.form}>
      <div className={S.searchBox}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">Criar +</button>
      </div>
    </form>
  );
}
