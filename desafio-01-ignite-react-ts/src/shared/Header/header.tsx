import logoSrc from '@/resources/images/logo.svg';
import S from './header.module.css';

export function Header() {
  return (
    <header className={S.header}>
      <img src={logoSrc} alt="Logo TODO" />
    </header>
  );
}
