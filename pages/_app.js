import NavBar from 'components/nav/nav'
import css from 'styles/page.module.css'
import 'styles/globals.css'

export default function App({ Component, pageProps }) {

  const isHome = true
  const pageClass = isHome ? css.homePage : css.page

  return (
    <div className={pageClass}>
      <Component {...pageProps} />
      <NavBar />
    </div>
  )
}
