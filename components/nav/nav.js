import css from './nav.module.css'
import {FaArrowAltCircleDown} from 'react-icons/fa'
import {useState} from 'react'

export default function Nav () {
    const [open, setOpen] = useState(false);
    const collapsedArrowClass = open ? '' : css.collapsedArrow;
    const collapsedNavBarClass = open ? '' : css.collapsedNavBar;
    const handleClick = () => {
        setOpen(!open);    
    }
    return (
        <nav>
            <div className={`${css.navBar} ${collapsedNavBarClass}`}>
                <a className={css.navLink} href='/about'>About Me</a>
                <a className={css.navLink} href='/resume'>Resume</a>
                <a className={css.navLink} href='/projects'>Projects</a>
            </div>
           <button className={`${css.navButton} ${collapsedArrowClass}`} onClick={handleClick}>
                <FaArrowAltCircleDown className={css.navArrow} />
            </button>
        </nav>
        )
}