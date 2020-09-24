import css from './content.module.css'

export default function Content({children}) {

  return (
    <main className={css.content}>
      <div className={css.contentWrapper}>
        {children}
      </div>
    </main>
  )
}
