import { Form } from '@/shared/Form';
import { Header } from '@/shared/Header';
import { NoList } from '@/ui/NoList';
import { Todo } from '@/ui/Todo';
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  // eslint-disable-next-line prettier/prettier
  useState
} from 'react';
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

  const [todos, setTodos] = useState<TodosProps[]>(() => {
    const getTodos = localStorage.getItem('@todos');

    return getTodos ? JSON.parse(getTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('@todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddNewTodo: AddNewTodo = useCallback(
    (event) => {
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
    },
    [newTodo]
  );

  const onChangeNewTodo: OnChangeTodoForm = useCallback((event) => {
    const value = event.target.value;
    setNewTodo(value);
  }, []);

  const onDeleteTodo = useCallback((id: number | string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  }, []);

  const onUpdateTodo = useCallback((id: number | string) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  return (
    <>
      <Header />
      <main className={S.content}>
        <Form
          onNewTodo={handleAddNewTodo}
          onChangeNewTodo={onChangeNewTodo}
          newTodo={newTodo}
        />
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              handleUpdate={() => onUpdateTodo(todo.id)}
              handleDelete={() => onDeleteTodo(todo.id)}
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
