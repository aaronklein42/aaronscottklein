import css from './header.module.css'

const Header = () => {

  const title = 'Aaron Scott Klein'

  return (
    <header className={css.header}>
      <h1 className={css.title}>{title}</h1>
      <nav className={css.nav}>
        <a className={css.navLink} href="about">About</a>
        <a className={css.navLink} href="projects">Projects</a>
        <a className={css.navLink} href="resume">Resume</a>
      </nav>
    </header>
  )
}

export default Header