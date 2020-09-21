import Head from 'next/head'
import Header from 'components/header/header'
import css from 'stlyes/page.module.css'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="content">
        <p>main content</p>
      </main>
      <footer className="footer">
        <p>footer content</p>
      </footer>
    </div>
  )
}
