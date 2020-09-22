import Head from 'next/head'
import Content from 'components/content/content'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        home page content
      </Content>
    </>
  )
}
