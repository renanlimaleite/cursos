import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import S from './Comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {    
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(prevState => prevState + 1)
  }

  return (
    <div className={S.comment}>
      <Avatar hasBorder={false} src="https://github.com/renanlimabl.png" alt="Avatar" />

      <div className={S.commentBox}>
        <div className={S.commentContent}>
          <header>
            <div className={S.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time 
                title="11 de Maio às 08:13h" 
                dateTime="2022-05-11 08:30:11">Cerca de 1 hora atrás
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp /> Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  )
}