import { Form } from '@/shared/Form';
import { Header } from '@/shared/Header';
import { NoList } from '@/ui/NoList';
import { Todo } from '@/ui/Todo';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import S from './home.module.css';
export type AddNewTodo = (event: FormEvent<HTMLFormElement>) => void;
export type OnChangeTodoForm = (event: ChangeEvent<HTMLInputElement>) => void;

type TodosProps = {
  id: number | string;
  title: string;
  completed: boolean;
};

export function Home() {
  const [newTodo, setNewTodo] = useState('');

  const [todos, setTodos] = useState<TodosProps[]>([
    { id: 1, title: 'Estudar Solidity', completed: false },
  ]);

  const handleAddNewTodo: AddNewTodo = (event) => {
    event.preventDefault();
    setTodos((prevState) => [
      ...prevState,
      {
        id: uuidv4(),
        title: newTodo,
        completed: false,
      },
    ]);
    setNewTodo('');
  };

  const onChangeNewTodo: OnChangeTodoForm = (event) => {
    const value = event.target.value;
    setNewTodo(value);
  };

  return (
    <>
      <Header />
      <main className={S.content}>
        <Form
          onNewTodo={handleAddNewTodo}
          onChangeNewTodo={onChangeNewTodo}
          newTodo={newTodo}
        />
        {todos.length ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              handleDelete={() => undefined}
              title={todo.title}
              checked={todo.completed}
            />
          ))
        ) : (
          <NoList />
        )}
      </main>
    </>
  );
}
