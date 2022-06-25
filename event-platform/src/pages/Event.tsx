import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'
import { useGetLessonsQuery } from '../graphql/generated'

type Params = {
  slug: string
}

export function Event() {
  const { data } = useGetLessonsQuery()

  const firstLesson = data?.lessons[0]?.slug

  const { slug = firstLesson } = useParams<Params>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  )
}
