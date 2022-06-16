import S from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={S.header}>
      <img src={igniteLogo} alt="Logo do Ignite" />
    </header>
  )
}