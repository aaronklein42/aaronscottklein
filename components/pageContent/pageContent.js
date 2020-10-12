import css from './pageContent.module.css'

export default function PageContent ({title, children}) {    
    return (
    <section className={css.container}>
        <h1 className={css.title}>{title}</h1>
    <p className={css.text}>{children}</p>
    </section>
    )
}