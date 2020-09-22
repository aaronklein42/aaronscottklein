import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import css from 'styles/page.module.css'
import 'styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className={css.page}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
