import css from './experienceSection.module.css'

export default function ExperienceSection ({range, title, responsibilities}) {

    return ( <>
        <h3 className={css.title}><strong>{range}</strong> {title} </h3>
        <ul className={css.responsibilities}>
            {responsibilities.map((item, idx) => {
                return <li key={idx} className={css.item}>{item}</li>
            })}
        </ul>
    </>)
}