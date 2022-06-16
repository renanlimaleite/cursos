import { Header } from "./components/Header";
import S from './App.module.css';
import './global.css'
import { Post, PostProps } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

// type post = PostProps & {
//   id: number
// }

interface post extends PostProps {
  id: number
}

const posts: post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-13 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-12 22:00:00')
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={S.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id} 
              author={post.author} 
              content={post.content}
              publishedAt={post.publishedAt}    
            />
          ))}
        </main>
      </div>
    </>
  )
}


