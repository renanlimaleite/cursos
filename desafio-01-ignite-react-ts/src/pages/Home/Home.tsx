import { Form } from '@/shared/Form';
import { Header } from '@/shared/Header';
import { ListTodos } from '@/shared/ListTodos';
import S from './home.module.css';

export function Home() {
  return (
    <>
      <Header />
      <main className={S.content}>
        <Form />
        <ListTodos />
      </main>
    </>
  );
}
