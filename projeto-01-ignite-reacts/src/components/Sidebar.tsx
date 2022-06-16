import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import S from './sidebar.module.css'

export function Sidebar() {
  return (
  <aside className={S.sidebar}>
    <img 
      className={S.cover}
      src="https://imgix.prensa.li/https%3A%2F%2Fstatic.prensa.li%2Fstories%2F45%2F15%2Fd9%2F85%2F4515d985-4d67-4134-a3bb-d8d10b791307.jpg?fit=crop&max-h=450&mh=450&w=800&s=10733c5ed086b3d54d2249942590cb8d"
     />

    <div className={S.profile}>
      <Avatar src="https://github.com/renanlimaleite.png" />
      <strong>Renan</strong>
      <span>developer</span>
    </div>

    <footer>
      <a href="#">
        <PencilLine size={20} />
        Editar seu perfil
      </a>
    </footer>    
  </aside>
  )
}