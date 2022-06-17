import { Header } from '@/shared/Header';
import { Form } from '@/ui/Form';
import { ListTodos } from '@/ui/ListTodos';

export function Home() {
  return (
    <main>
      <Header />
      <Form />
      <ListTodos />
    </main>
  );
}
