import css from './content.module.css'

export default function Content({children}) {

  return (
    <main className={css.content}>
      <p>{children}</p>
    </main>
  )
}
