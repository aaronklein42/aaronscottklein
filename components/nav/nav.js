import css from './nav.module.css'
import {FaArrowAltCircleDown} from 'react-icons/fa'
import {useState} from 'react'
import Link from 'next/link'

export default function Nav () {
    const [open, setOpen] = useState(false);
    const [activePage, setActivePage] = useState('');
    const collapsedArrowClass = open ? '' : css.collapsedArrow;
    const collapsedNavBarClass = open ? '' : css.collapsedNavBar;
    const handleClick = () => {
        setOpen(!open);
        setActivePage(location.pathname);
    }
    const navLinks = [
        {
            href: '/',
            name: 'Home'
        },
        {
            href: '/about',
            name: 'About Me'
        },
        {
            href: '/resume',
            name: 'Resume'
        },
        {
            href: '/projects',
            name: 'Projects'
        }
    ]
    const getClass = (href) => {
        return activePage === href ? css.hidden : ''
    }

    return (
        <nav>
            <div className={`${css.navBar} ${collapsedNavBarClass}`}>
                {navLinks.map((link, idx) => (
                    <Link href={link.href} key={idx}>
                        <a className={`${css.navLink} ${getClass(link.href)}`} onClick={handleClick}>{link.name}</a>
                    </Link>
                ))}
            </div>
                <button className={`${css.navButton} ${collapsedArrowClass}`} onClick={handleClick}>
                <FaArrowAltCircleDown className={css.navArrow} />
            </button>
        </nav>
    )
}