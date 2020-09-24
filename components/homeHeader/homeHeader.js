import css from './homeHeader.module.css'

export default function HomeHeader() {
  return (
    <header className={css.header}>
      <h1 className={css.title}>Hi, my name is Aaron.</h1>
      <h2 className={css.subtitle}>I develop user interfaces.</h2>
    </header>
  )
}
