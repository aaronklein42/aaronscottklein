import css from './resumeSection.module.css'

export default function ResumeSection({children, title}) {
    return ( 
    <>
        <h2 className={css.category}><span className={css.categorySpan}>{title}</span></h2>         
        {children}
    </> )
}