import S from './form.module.css';

export function Form() {
  return (
    <form className={S.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">Criar +</button>
    </form>
  );
}
