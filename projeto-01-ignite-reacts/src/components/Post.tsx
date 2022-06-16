import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import S from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


// type Author = {
//   name: string
//   role: string
//   avatarUrl: string
// }

// type Content = {
//   type: 'paragraph' | 'link'
//   content: string
// }

// export type PostProps = {
//   author: Author
//   publishedAt: Date
//   content: Content[]
// }

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostProps {
  author: Author
  publishedAt: Date
  content: Content[]
}


export function Post({ author, publishedAt, content }: PostProps) {
  const [newCommentText, setNewCommentText] = useState('')

  const [comments, setComments] = useState([
    'Post muito bacana'
  ])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteComment(comment: string) {
    setComments(prevState => prevState.filter(comments => comments !== comment))
  }

  const isNewCommentDisabled = newCommentText.length < 2

  return (
    <article className={S.post}>
      <header>
        <div className={S.author}>
          <Avatar src={author.avatarUrl} />
          <div className={S.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time 
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
        {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={S.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={S.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          required
          onInvalid={handleNewCommentInvalid}
          onChange={handleNewCommentChange}
          placeholder="Deixe seu comentário"
        />

        <footer>
          <button disabled={isNewCommentDisabled} type="submit">Comentar</button>
        </footer>
      </form>

      <div className={S.commentList}>
        {!!comments.length && comments.map(comment => (
          <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}