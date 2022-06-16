import S from './Avatar.module.css'

// type AvatarProps = {
//   src: string
//   alt?: string
//   hasBorder?: boolean
// }

interface AvatarProps {
  src: string
  alt?: string
  hasBorder?: boolean
}

export function Avatar({ src, hasBorder = true, alt }: AvatarProps) {
  return (
    <img
      className={hasBorder ? S.avatarHasBorder : S.avatar}
      src={src}
      alt={alt}
    />
  )
}