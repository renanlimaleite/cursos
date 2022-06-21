import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`

type Teacher = {
  name: string
}

type Lesson = {
  id: string;
  title: string;
  teacher: Teacher
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
    <ul>
      {/* {data?.lessons.map((lesson: Lesson) => {
        return <li>lesson.title</li>
      })} */}
      {data?.lessons.map((lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
