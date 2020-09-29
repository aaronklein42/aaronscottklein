import css from './resume.module.css'
import ResumeSection from 'components/resumeSection/resumeSection.js'
import ExperienceSection from 'components/experienceSection/experienceSection.js'

export default function Resume () {

    const KleinArcList = [
        'Developed and maintained the website',
        'Purchased and maintained company software and devices',
        'Managed all updates to company infrastructure'
    ]

    const UseReadyList = [
        'Installed and updated hardware components for a major bank',
        'Maintained proper documentation of updates performed',
        'Diagnosed and fixed level one support issues'
    ]

    const PittJCSList = [
        'Developed UI for multiple websites',
        'Utilized Scrum/Agile workflow',
        'Maintained content through CMS'
    ]

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <h1 className={css.title}><span className={css.titleSpan}>Resume |</span> Aaron Scott Klein</h1>
                <address className={css.address}>724-875-0737 | aaronklein42@gmail.com | 501 Hedge Row Rd, Brandon FL, 33510</address>
                <ResumeSection title="Skills">
                    <ul>
                        <li>Skilled with JavaScript, HTML, and CSS</li>
                        <li>Experience building with React</li>
                        <li>Familiar with both object-oriented and functional programming styles</li>
                        <li>Comfortable with back-end languages like Java and C++</li>
                        <li>Strong communication and technical writing skills</li>
                        <li>Knowledge of systems analysis/design and the SDLC</li>
                    </ul>
                </ResumeSection>
                <ResumeSection title="Experience">
                    <ExperienceSection range="2020 - Current" title="UI Developer, Pittsburgh Japanese Culture Society" responsibilities={PittJCSList}/>
                    <ExperienceSection range="2018 - Current" title="Director of IT, KleinARC, LLC" responsibilities={KleinArcList}/>
                    <ExperienceSection range="2017 - 2018" title="PC Support Technician, UseReady" responsibilities={UseReadyList}/>
                </ResumeSection>
                <ResumeSection title="Education">
                    <h3 className={css.educationTitle}>2020 <span>A.S. in Technology Studies</span></h3>
                    <h4 className={css.schoolTitle}>California University of PA</h4>
                </ResumeSection>
            </div> 
      </div>
      )
}