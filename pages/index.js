import Head from 'next/head'
import Content from 'components/content/content'
import HomeHeader from 'components/homeHeader/homeHeader'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content>
        <HomeHeader/>
      </Content>
    </>
  )
}
