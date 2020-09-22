import css from './header.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {

  const [isHome, setIsHome] = useState(false)

  useEffect(() => setIsHome(location.pathname === '/'))

  const title = 'Aaron Scott Klein'

  return (
    <header className={css.header}>
      {isHome
        ? <h1 className={css.title}>{title}</h1>
        : <Link href="/"><a className={css.title}>{title}</a></Link>
      }
      <nav className={css.nav}>
        <Link href="/about">
          <a className={css.navLink}>About</a>
        </Link>
        <Link href="/projects">
          <a className={css.navLink}>Projects</a>
        </Link>
        <Link href="/resume">
          <a className={css.navLink}>Resume</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header